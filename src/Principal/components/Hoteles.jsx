import React, { useEffect, useState } from 'react';
import { apiHotelesGrupal } from '../../cliente/Principal/api/apiHoteles';
import { NavBarSinSection } from './NavbarSinSection';
import { Footer } from './Footer';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';

export const Hoteles = () => {
  const [listaHoteles, setListaHoteles] = useState([]);

  const viewHotelesList = async () => {
    const getListaHotelesList = await apiHotelesGrupal();
    setListaHoteles(getListaHotelesList);
  };

  useEffect(() => {
    viewHotelesList();
  }, []);

  return (
    <>
      <NavBarSinSection />
      <div className='container mb-3'>
        <h1 className='mt-4 mb-4' style={{ fontSize: "45px", color: "#25587a", fontWeight: "bold", textAlign: "center" }}>ENCUENTRA EL MEJOR HOTEL PARA TI</h1>
        <MDBRow className="mb-4 mt-3" style={{ minHeight: "70vh" }}>
          {listaHoteles?.map((item, index) => (
            <MDBCol key={index} lg={2} md={12} sm={12} className='mb-4 mb-lg-2'>
              <div className="image-container" onClick={() => {
                setShowModal(true)
              }}>
                <img
                  src={item.img}
                  className={`shadow-1-strong rounded mb-2`}
                  alt={`Image ${index}`}
                  style={{ objectFit: '', height: "25vh", width: "25vh" }}
                />
                <div className="overlay2 d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <p className='overlay-text'>{item.nombre}</p>
                    <p className='overlay-text2'>{item.pais}</p>
                  </div>
                </div>

              </div>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
      <Footer />
    </>
  );
};
