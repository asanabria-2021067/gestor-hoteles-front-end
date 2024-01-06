import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { apiHotelFromCountry } from '../../cliente/Principal/api/apiHoteles';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';


export const DestinosHoteles = () => {
    const [country, setCountry] = useState('');
    const [currentLocation, setCurrentLocation] = useState({
        latitud: null,
        longitud: null,
      });
    const [hotel, setHotel] = useState([])
      const localizacionActual = async () => {
        if (navigator.geolocation) {
          await navigator.geolocation.getCurrentPosition(
            async (position) => {
              await setCurrentLocation({
                latitud: position.coords.latitude,
                longitud: position.coords.longitude,
              });
            },
            (error) => {
              console.error(error);
            }
          );
        } else {
          console.error(
            "No se puede localizar tu ubicacion. Prueba en otro navegador"
          );
        }
      };
      useEffect(() => {
        localizacionActual();
      }, []);

      const fetchCountryFromCoordinates = async (latitude, longitude) => {
        const apiKey = '1d055f5bf229464eb576e4bd483eb7e2';
        const url = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&language=en`;
        try {
          const response = await axios.get(url);
          const data = response.data;
          const country = data.results[0].components.country;
          setCountry(country); 
        } catch (error) {
          console.error('Error al obtener el país desde las coordenadas:', error);
        }
      };
      
      useEffect(() => {
        if (currentLocation.latitud && currentLocation.longitud) {
          fetchCountryFromCoordinates(currentLocation.latitud, currentLocation.longitud);
        }
      }, [currentLocation]);
      
      const fetchHotelfromCountry = async(country) =>{
        try {
            const response = await apiHotelFromCountry(country);
            setHotel(response)
        } catch (error) {
            return error
        }
      }

      useEffect(() => {
        fetchHotelfromCountry(country)
      }, [country])
      

  return (
    <div className="">
    <div className="container mt-4">
        <div className="d-flex align-items-center justify-content-center">
        <h1 style={{color: 'black', fontSize: "40px", fontWeight: "bold", textAlign: "center"}}>Descubre {country}</h1>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-3">
        <p style={{textAlign: "center", fontSize: "15px"}}>Opciones más populares entre la comunidad viajera</p> 
        </div>
        <div className='align-items-center justify-content-center'>
        <MDBRow style={{alignItems: "center"}}>
        {hotel && hotel.length > 0 && ( 
      <MDBRow>
        {hotel.map((h) => (
          <MDBCol lg={2} md={4} className='mb-4 mb-lg-0' key={h.id}>
            <div key={h.nombre}>
            <img
              src={h.img}
              id="imgHotelDestino"
              className='img-fluid w-100 shadow-1-strong rounded mb-4'
              alt='Hotel Image'
            />
            <h3 style={{color: 'black', fontSize: "15px", fontWeight: "bold", textAlign: "center"}}>{h.nombre}</h3>
            </div>
          </MDBCol>
          
        ))}
      </MDBRow>
    )}
     
    </MDBRow>
    </div>
    </div>
    </div>
  )
}
