import React, { useEffect, useState } from 'react'
import { Buscador } from './Buscador'
import { NavBarUsuarioHeader } from '../../Navbar-UsuarioHeader'

export const Hotel = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitud: null,
    longitud: null,
  });
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
  
  return (
    <>
    <NavBarUsuarioHeader/>
    {currentLocation.latitud !== null && currentLocation.longitud !== null ? (
        <Buscador location={currentLocation} />
      ) : (
        <p>Obteniendo ubicación...</p>
      )}
    </>
  )
}
