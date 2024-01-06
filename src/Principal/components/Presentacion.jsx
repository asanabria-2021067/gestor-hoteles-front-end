import React from 'react';
import imagenHotel from "../../img/hotel4.jpg"
export const Presentacion = () => {
  return (
    <>
      <br />
      <div style={{backgroundColor: "#1b3f57"}}>
      <div className='container pt-3 pb-4' id='containerInfoAcerca'>
          <h1 className="mb-3 mt-2" style={{fontSize: "45px", color: "white", fontWeight: "bold", textAlign: "center"}}>
            ACERCA DE NOSOTROS</h1>
          <img
            src={imagenHotel}
            className='col-12 col-md-6 float-md-end ms-md-3'
            id='imgInfoAcerca'
            alt='...'
          />
          <p className='col-12 mt-4 me-1' id='textInfoAcerca' style={{padding:"8vh", fontSize:"22px", color:"white", fontWeight:"lighter", textAlign: "justify"}}>
          Descubre una variedad de hoteles en todo el mundo y reserva tu refugio ideal de manera sencilla. Desde resorts de lujo hasta acogedores alojamientos boutique, nuestra plataforma te ofrece opciones que se ajustan a tus preferencias.
          <p style={{fontWeight: "600"}}>¡Asegura tu estancia perfecta hoy!</p>
          </p>
      </div>
      <br />
      </div>
    </>
  );
};