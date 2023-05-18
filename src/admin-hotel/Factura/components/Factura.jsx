import React, { useState } from 'react';
import jsPDF from 'jspdf';

export const Factura = () => {
  const [data, setData] = useState([]);

  const fetchBackendData = async () => {
    const response = await fetch('/backend/route');
    const data = await response.json();
    setData(data);
  };

  const generatePdf = () => {
    const doc = new jsPDF();

    // Agrega los datos de tu backend en el PDF
    let yPos = 20;
    data.forEach((item, index) => {
      doc.text(`${index + 1}. ${item}`, 20, yPos);
      yPos += 10;
    });

    // Descarga el PDF
    doc.save('backend-data.pdf');
  };

  return (
    <div>
      <button onClick={fetchBackendData}>Obtener datos del backend</button>
      <button onClick={generatePdf}>Generar PDF</button>
    </div>
  );
};