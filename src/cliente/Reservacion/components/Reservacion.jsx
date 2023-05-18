import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiReservacion, deleteEventos, deleteHabitaciones, deleteServicios } from "../api/apiReservacion";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import { addFactura } from "../../Factura/api/apiFactura";
import Swal from "sweetalert2";
import { NavBar } from "../../Navbar-Usuario";
export const Reservacion = () => {
  const [reservacion, setReservacion] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [habitaciones, setHabitaciones] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [usuario, setUsuario] = useState({});
  const [totalReserva, setTotalReserva] = useState(0);
  const [actualizarReserva, setActualizarReserva] = useState(false);
  const navigate = useNavigate();

  const viewReservacion = async () => {
    const getListaHabitacionesFromApi = await apiReservacion();
    setReservacion(getListaHabitacionesFromApi);
    setEventos(getListaHabitacionesFromApi.eventos);
    setHabitaciones(getListaHabitacionesFromApi.habitaciones);
    setServicios(getListaHabitacionesFromApi.servicios);
    setUsuario(getListaHabitacionesFromApi.usuario);
  };

  useEffect(() => {
    viewReservacion();
  }, []);


  useEffect(() => {
    let totalInicial = 0;
    habitaciones.forEach((h) => {
      totalInicial += h.costo;
    });
    servicios.forEach((s) => {
      totalInicial += s.precio;
    });
    eventos.forEach((e) => {
      totalInicial += e.precio;
    });
  
    setTotalReserva(totalInicial);
  }, [habitaciones, servicios, eventos]);

  const handleFactura = async () => {
    if (habitaciones.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe agregar al menos una habitación antes de generar la factura.",
      });
      return;
    } else {
      const factura = await addFactura();
      handleGenerarPDF();
      setActualizarReserva(true);
      limpiarReservacion();
      navigate(`/hoteles`);
    }
    const factura = await addFactura();
    handleGenerarPDF();
    setActualizarReserva(true);
    limpiarReservacion();
    navigate(`/hoteles`);
  }
    

  const limpiarReservacion = () => {
    setReservacion([]);
    setEventos([]);
    setHabitaciones([]);
    setServicios([]);
    setUsuario({});
    setTotalReserva(0);
  }

  const handleGenerarPDF = () => {
    // Crear el documento PDF
    const doc = new jsPDF();
    // Agregar el contenido
    const fechaInicio = new Date(reservacion.fechaInicio);
    const fechaInicioFormatted = fechaInicio.toLocaleDateString();
    const fechaFinal = new Date(reservacion.fechaFinal);
    const fechaFinalFormatted = fechaFinal.toLocaleDateString();
    doc.text(`Resumen de reserva para ${usuario.nombre}`, 20, 20);
    doc.text(`Fecha inicio: ${fechaInicioFormatted}`, 20, 30);
    doc.text(`Fecha final: ${fechaFinalFormatted}`, 20, 40);
    doc.text(
      `Cantidad de personas: ${reservacion.cantidadPersonas}`,
      20,
      50
    );
    doc.text(`Cuenta:`, 20, 60);
    const habitacionesStartY = 70;
    const habitacionesData = habitaciones.map((h, index) => {
      return [`${index + 1}. Habitación ${h.tipo}`, `Q.${h.costo}`];
    });
    doc.autoTable({
      head: [["Habitaciones", "Precio"]],
      body: habitacionesData,
      startY: habitacionesStartY,
      margin: { top: 10 },
    });
    const serviciosStartY = habitacionesStartY + habitacionesData.length * 10 + 10;
    doc.text(`Servicios:`, 20, 90 + habitaciones.length * 10);
    const serviciosData = servicios.map((s, index) => {
      return [`${index + 1}. Servicio ${s.nombre}`, `Q.${s.precio}`];
    });
    doc.autoTable({
      head: [["Servicios", "Precio"]],
      body: serviciosData,
      startY: serviciosStartY,
      margin: { top: 10 },
    });
    const eventosStartY = serviciosStartY + serviciosData.length * 10 + 10;
    doc.text(`Eventos:`, 20, 120 + (habitaciones.length + servicios.length) * 10);
    const eventosData = eventos.map((e, index) => {
      return [`${index + 1}. Evento ${e.nombre}`, `Q.${e.precio}`];
    });
    doc.autoTable({
      head: [["Eventos", "Precio"]],
      body: eventosData,
      startY: eventosStartY,
      margin: { top: 10 },
    });
    doc.text(`Total: Q.${reservacion.total}`, 160, eventosStartY+50);
    // Descargar el PDF
    doc.save("reserva.pdf");
  };

  const handleEliminarHabitacion = async (id) => {
    let result = await deleteHabitaciones(id);
    if (result) {
      const habitacionEliminada = habitaciones.find((h) => h._id === id);
      if (habitacionEliminada) {
        const costoHabitacionEliminada = habitacionEliminada.costo;
        setTotalReserva((prevTotal) => prevTotal - costoHabitacionEliminada);
      }
  
      setHabitaciones((prevHabitaciones) =>
        prevHabitaciones.filter((h) => h._id !== id)
      );
      setReservacion((prevReservacion) => ({
        ...prevReservacion,
        habitaciones: prevReservacion.habitaciones.filter((h) => h._id !== id)
      }));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó la habitación correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar la habitación!",
      });
    }
  };
  

  const handleEliminarServicios = async (id) => {
    let result = await deleteServicios(id);
    if (result) {
      const servicioEliminado = servicios.find((s) => s._id === id);
      if (servicioEliminado) {
        const costoServicioEliminado = servicioEliminado.costo;
        setTotalReserva((prevTotal) => prevTotal - costoServicioEliminado);
      }
  
      setServicios((prevServicios) =>
        prevServicios.filter((s) => s._id !== id)
      );
      setReservacion((prevReservacion) => ({
        ...prevReservacion,
        servicios: prevReservacion.servicios.filter((s) => s._id !== id)
      }));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó el servicio correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar el servicio!",
      });
    }
  };

  const handleEliminarEventos = async (id) => {
    let result = await deleteEventos(id);
    if (result) {
      const eventoEliminado = eventos.find((e) => e._id === id);
      if (eventoEliminado) {
        const costoEventoEliminado = eventoEliminado.costo;
        setTotalReserva((prevTotal) => prevTotal - costoEventoEliminado);
      }
  
      setEventos((prevEventos) => prevEventos.filter((e) => e._id !== id));
      setReservacion((prevReservacion) => ({
        ...prevReservacion,
        eventos: prevReservacion.eventos.filter((e) => e._id !== id)
      }));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó el evento correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar el evento!",
      });
    }
  }
  return (
    <>
    <NavBar/>
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-8">
            <div className="card card-body shadow">
              <h2 className="tituloReserva text-center mb-4">Reservación</h2>
              <div className="row mb-3">
                <div className="col-md-6">
                  <strong>Fecha de inicio:</strong>{" "}
                  {reservacion.fechaInicio && new Date(reservacion.fechaInicio).toLocaleDateString()}
                </div>
                <div className="col-md-6">
                  <strong>Fecha de fin:</strong>{" "}
                  {reservacion.fechaFinal && new Date(reservacion.fechaFinal).toLocaleDateString()}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <strong>Cantidad de personas:</strong> {reservacion.cantidadPersonas}
                </div>
              </div>
              <hr />
              <h4 className="reservacionTitulo">Habitaciones</h4>
              {habitaciones.length > 0 ? (
                <ul>
                  {habitaciones.map((h) => (
                    <div key={h._id} className="card mb-3 mt-4">
                    <div className="row g-0">
                      <div className="col-md-4">
                          <img
                            src={h.img}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            Tipo: {h.tipo}
                          </h5>
                          <p>Numero: {h.numero}</p>
                          <p>Precio: {h.costo}</p>
                        </div>
                      </div>
                      <button
                className="btn btn-danger mt-2"
                onClick={() => handleEliminarHabitacion(h._id)}
              >
                
                Eliminar
              </button>
                    </div>
                  </div>
                  ))}
                </ul>
              ) : (
                <p>No se han agregado habitaciones a la reserva.</p>
              )}
              <hr />
              <h4 className="reservacionTitulo">Servicios</h4>
              {servicios.length > 0 ? (
                <ul>
                  {servicios.map((s) => (
                    <div key={s._id} className="card mb-3 mt-4">
                    <div className="row g-0">
                      <div className="col-md-4">
                          <img
                            src={s.img}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            Nombre: {s.nombre}
                          </h5>
                          <p>Descripcion: {s.descripcion}</p>
                          <p> Precio: {s.precio} </p>
                        </div>
                      </div>
                      <button
                className="btn btn-danger mt-2"
                onClick={() => handleEliminarServicios(s._id)}
              >
                
                Eliminar
              </button>
                    </div>
                  </div>
                  ))}
                </ul>
              ) : (
                <p>No se han agregado servicios a la reserva.</p>
              )}
              <hr />
              <h4 className="reservacionTitulo">Eventos</h4>
              {eventos.length > 0 ? (
                <ul>
                  {eventos.map((e) => (
                    <div key={e._id} className="card mb-3 mt-4">
                    <div className="row g-0">
                      <div className="col-md-4">
                          <img
                            src={e.img}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            Nombre: {e.nombre}
                          </h5>
                          <p>Descripcion: {e.descripcion}</p>
                          <p>Precio: {e.precio}</p>
                        </div>
                      </div>
                      <button
                className="btn btn-danger mt-2"
                onClick={() => handleEliminarEventos(e._id)}
              >
                
                Eliminar
              </button>
                    </div>
                  </div>
                  ))}
                </ul>
              ) : (
                <p>No se han agregado eventos a la reserva.</p>
              )}
              <div className="col-md-6">
                  <strong>Total:</strong> Q.{totalReserva}
                </div>
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleFactura}>
                  Factura
                </button>
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => navigate("/hoteles")}
                >
                  Seguir Reservando
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
