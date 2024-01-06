import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import imagen1 from "../../img/hotel1.jpg"
import imagen2 from "../../img/hotel2.webp"
import imagen3 from "../../img/hotel3.jpg"
export const Slide=() => {
  return (
    <div className="container mb-4">
    <MDBCarousel showControls showIndicators dark fade style={{width: "100%"}}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={imagen1}
        alt='...'
        style={{ backgroundColor: "#0808082c"}}
      >
        <h1 style={{color: 'white', fontSize: "40px", fontWeight: "bold",backgroundColor: "#0808082c"}}>Servicio Hotelero</h1>
        <p style={{color: 'whitesmoke' , fontSize: "15px", fontWeight: "bold",backgroundColor: "#0808082c"}}>Reserva en tu destino favorito</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={imagen2}
        alt='...'
        style={{ backgroundColor: "#0808082c"}}
      >
        <h1 style={{color: 'white', fontSize: "40px", fontWeight: "bold",backgroundColor: "#0808082c"}}>Encontraras las mejores opciones</h1>
        <p style={{color: 'whitesmoke' , fontSize: "15px", fontWeight: "bold",backgroundColor: "#0808082c"}}>Habitaciones, eventos, servicios y mucho más</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={imagen3}
        alt='...'
        style={{ backgroundColor: "#0808082c"}}
      >
        <h1 style={{color: 'white', fontSize: "40px", fontWeight: "bold",backgroundColor: "#0808082c"}}>Destinos para todo el mundo</h1>
        <p style={{color: 'whitesmoke' , fontSize: "15px", fontWeight: "bold",backgroundColor: "#0808082c"}}>Encuentra los mejores hoteles de tu futuro destino</p>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  );
}