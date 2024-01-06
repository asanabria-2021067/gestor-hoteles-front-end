import React from 'react';
import imagen1 from "../../img/hotel1.jpg"
import imagen2 from "../../img/hotel2.webp"
import imagen4 from "../../img/hotel4.jpg"
export const Tendencia = () => {
  return (
    <>
      <div className='' style={{backgroundColor: "#25587a", paddingBottom: "5%", paddingTop: "1%"}}>
      <div className='container mt-2 mb-2'>
        <h1 style={{fontSize: "45px", color: "white", fontWeight: "bold", textAlign: "center"}}>TENDENCIAS</h1>
        <br />
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          <div className='col'>
            <div className='card h-100'>
              <img
                src={imagen1}
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title' style={{fontWeight: "bold", fontSize:"30px", textAlign:"center"}}>Hotel Aman Tokyo</h5>
                <p className='card-text'>
                  El Hotel Aman Tokyo es un destino exclusivo y lujoso en el corazón de Tokio. Con vistas impresionantes de la ciudad y una atención excepcional a los detalles.
                </p>
              </div>
              <div className='card-footer'>
                <small className='text-body-secondary'>
                  Última actualización hace 3 minutos
                </small>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <img
                src={imagen4}
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title' style={{fontWeight: "bold" , fontSize:"30px", textAlign:"center"}}>Burj Al Arab Jumeirah</h5>
                <p className='card-text'>
                  El Burj Al Arab Jumeirah es un icónico hotel de lujo en Dubái, conocido por su diseño único y su servicio excepcional. Situado en una isla artificial.
                </p>
              </div>
              <div className='card-footer'>
                <small className='text-body-secondary'>
                  Última actualización hace 3 minutos
                </small>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <img
                src={imagen2}
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title' style={{fontWeight: "bold" , fontSize:"30px", textAlign:"center"}}>Ritz-Carlton</h5>
                <p className='card-text'>
                  El Ritz-Carlton Hong Kong es un hotel de lujo situado en el icónico rascacielos ICC de Hong Kong. Con impresionantes vistas panorámicas de la ciudad.
                </p>
              </div>
              <div className='card-footer'>
                <small className='text-body-secondary'>
                  Última actualización hace 3 minutos
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};