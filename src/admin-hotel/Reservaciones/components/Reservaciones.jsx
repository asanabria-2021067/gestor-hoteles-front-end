import React, { useEffect, useState } from "react";
import { NavBar } from "../../Navbar-Admin";
import { Footer } from "../../../Principal/components/Footer";
import { apiReserva, eliminarReservaById } from "../api/apiReservacion";
import { addFacturaById } from "../../../cliente/Factura/api/apiFactura";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useParams } from "react-router-dom";

export const ListaReservaciones = () => {
  const [listaReservas, setListaRes] = useState([]);
  console.log(listaReservas);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  console.log(id);
  const viewReservas = async () => {
    const setListaReservas = await apiReserva(id);
    setListaRes(setListaReservas);
  };

  const handleEliminarReserva = async (id) => {
    try {
      await eliminarReservaById(id);
      // Actualizar la lista de reservas después de eliminar
      viewReservas();
    } catch (error) {
      console.error("Error al eliminar la reserva:", error);
    }
  };

  useEffect(() => {
    viewReservas();
  }, []);

  const handleOpenModal = (e) => {
    setShowModal(true);
    setEvento(e);
  };

  const handleFactura = async (e) => {
    console.log(e);
    const factura = await addFacturaById(e._id);
    handleGenerarPDF(e);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGenerarPDF = (e) => {
    const doc = new jsPDF();

    // Configuración de estilos
    const margin = 20; // Margen del PDF
    const lineHeight = 10; // Altura de línea
    const boldFontStyle = "bold"; // Estilo de fuente en negrita

    // Función para agregar texto con estilo
    const addStyledText = (text, x, y, style = "") => {
      doc.setFont(undefined, style);
      doc.text(text, x, y);
    };

    // Calcular posiciones iniciales
    let currentY = margin;

    // Título de la factura
    addStyledText(
      `Resumen de reserva para ${e.usuario.nombre}`,
      margin,
      currentY,
      boldFontStyle
    );
    currentY += lineHeight;

    // Fecha de inicio
    const fechaInicio = new Date(e.fechaInicio);
    const fechaInicioFormatted = fechaInicio.toLocaleDateString();
    addStyledText(`Fecha inicio: ${fechaInicioFormatted}`, margin, currentY);
    currentY += lineHeight;

    // Fecha final
    const fechaFinal = new Date(e.fechaFinal);
    const fechaFinalFormatted = fechaFinal.toLocaleDateString();
    addStyledText(`Fecha final: ${fechaFinalFormatted}`, margin, currentY);
    currentY += lineHeight;

    // Cantidad de personas
    addStyledText(
      `Cantidad de personas: ${e.cantidadPersonas}`,
      margin,
      currentY
    );
    currentY += lineHeight;

    // Cuenta
    addStyledText("Cuenta:", margin, currentY, boldFontStyle);
    currentY += lineHeight;

    // Tabla de habitaciones
    const habitacionesStartY = currentY + lineHeight;
    const habitacionesData = e.habitaciones.map((h, index) => {
      return [`${index + 1}. Habitación ${h.tipo}`, `Q.${h.costo}`];
    });
    doc.autoTable({
      head: [["Habitaciones", "Precio"]],
      body: habitacionesData,
      startY: habitacionesStartY,
      margin: { top: margin },
      columnWidth: "auto", // Ancho de columna ajustado automáticamente
      styles: { cellPadding: 2 },
    });
    currentY = doc.lastAutoTable.finalY + lineHeight;

    // Tabla de servicios
    const serviciosStartY = currentY + lineHeight;
    const serviciosData = e.servicios.map((s, index) => {
      return [`${index + 1}. Servicio ${s.nombre}`, `Q.${s.precio}`];
    });
    doc.autoTable({
      head: [["Servicios", "Precio"]],
      body: serviciosData,
      startY: serviciosStartY,
      margin: { top: margin },
      columnWidth: "auto", // Ancho de columna ajustado automáticamente
      styles: { cellPadding: 2 },
    });
    currentY = doc.lastAutoTable.finalY + lineHeight;

    // Tabla de eventos
    const eventosStartY = currentY + lineHeight;
    const eventosData = e.eventos.map((ev, index) => {
      return [`${index + 1}. Evento ${ev.nombre}`, `Q.${ev.precio}`];
    });
    doc.autoTable({
      head: [["Eventos", "Precio"]],
      body: eventosData,
      startY: eventosStartY,
      margin: { top: margin },
      columnWidth: "auto", // Ancho de columna ajustado automáticamente
      styles: { cellPadding: 2 },
    });
    currentY = doc.lastAutoTable.finalY + lineHeight;

    // Total
    addStyledText(
      `Total: Q.${e.total}`,
      margin + 140,
      eventosStartY + 50,
      boldFontStyle
    );

    // Descargar el PDF
    doc.save("reserva.pdf");
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="container" style={{ overflowX: "auto" }}>
        <h2>Lista de Reservas</h2>
        <button
          id="btn-agregar"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            navigate("/agregarReservacion");
          }}
        >
          Agregar
        </button>
        <table className="table" >
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Usuario</th>
              <th scope="col">Personas</th>
              <th scope="col">Fecha Inicio</th>
              <th scope="col">Fecha Fin</th>
              <th scope="col">Habitaciones</th>
              <th scope="col">Servicios</th>
              <th scope="col">Eventos</th>
              <th scope="col">Total</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {listaReservas.map((e) => {
              return (
                <tr key={e._id}>
                  <th scope="row">{e._id}</th>
                  <td> {e.usuario.nombre} </td>
                  <td> {e.cantidadPersonas}</td>
                  <td> {e.fechaInicio.substring(0, 10)}</td>
                  <td> {e.fechaFinal.substring(0, 10)}</td>
                  {e.habitaciones.length === 0 ? (
                    <td>No hay habitaciones</td>
                  ) : (
                    <td>{e.habitaciones.map((h) => h).join(", ")}</td>
                  )}
                  {e.servicios.length === 0 ? (
                    <td>No hay servicios</td>
                  ) : (
                    <td>{e.servicios.map((s) => s).join(", ")}</td>
                  )}
                  {e.eventos.length === 0 ? (
                    <td>No hay eventos</td>
                  ) : (
                    <td>{e.eventos.map((ev) => ev).join(", ")}</td>
                  )}
                  <td>{e.total}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleFactura(e)}
                    >
                      Factura
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleEliminarReserva(e.usuario._id)}
                    >
                      Cancelar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <Footer></Footer>
    </>
  );
};
