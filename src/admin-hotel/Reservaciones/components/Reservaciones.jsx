import React, { useEffect, useState } from "react";
import { NavBar } from "../../Navbar-Admin";
import { Footer } from "../../../Principal/components/Footer";
import { apiReserva } from "../api/apiReservacion";
import { addFacturaById } from "../../../cliente/Factura/api/apiFactura";
import jsPDF from "jspdf";
import "jspdf-autotable";

export const ListaReservaciones = () => {
  const [listaReservas, setListaRes] = useState([]);
  const [habitaciones, setHabitaciones] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const viewReservas = async () => {
    const setListaReservas = await apiReserva();
    setListaRes(setListaReservas);
    setHabitaciones(setListaReservas);
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
    addStyledText(`Cantidad de personas: ${e.cantidadPersonas}`, margin, currentY);
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
      <div className="container">
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
        <table className="table">
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
                    e.habitaciones.map((h) => <td key={h._id}>{h.tipo}</td>)
                  )}
                  {e.servicios.length === 0 ? (
                    <td>No hay servicios</td>
                  ) : (
                    e.servicios.map((s) => <td key={s._id}>{s.nombre}</td>)
                  )}
                  {e.eventos.length === 0 ? (
                    <td>No hay eventos</td>
                  ) : (
                    e.eventos.map((ev) => <td key={ev._id}>{ev.nombre}</td>)
                  )}
                  <td>{e.total}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleFactura(e)}
                    >
                      Factura
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