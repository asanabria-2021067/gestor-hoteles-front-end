import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { apiHotelesGrupal } from "../api/apiHoteles";

export const Mapa = ({ hotel }) => {
  
  const [markersData, setMarkersData] = useState([]);
  let center = [14.61, -90.51327];
  
  // Llamar a la API y almacenar los datos en el estado
  const fetchData = async () => {
    try {
      const response = await apiHotelesGrupal();
      setMarkersData(response); // Almacena los datos en el estado
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  // Componente para centrar el mapa en una ubicación específica
  const MapCenter = () => {
    const map = useMap();
  
    useEffect(() => {
      console.log("Hotel Location:", hotel);
      {hotel != null ? (
        hotel.map((h) => {
      if (hotel && h.latitud && h.longitud) {
        map.flyTo([h.latitud, h.longitud], 13);
        markersData.forEach((marker) => {
          if (marker._id === h._id) {
            
          }
        })
        
        }
      })):(
      <h1> </h1>
    )}
  }, [ map]);
  
    return null;
  };

  return (
    <MapContainer center={center} zoom={13} style={{ height: "600px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <MapCenter /> {/* Componente para centrar el mapa en la ubicación proporcionada */}
      
      {markersData.map((marker) => (
        <Marker key={marker._id} position={[marker.latitud, marker.longitud]}>
          <Popup >
            <img
              src={marker.img}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              alt="Hotel"
            ></img>
            <p>
              <strong>Hotel: {marker.nombre}</strong>
            </p>
            <p>Pais: {marker.pais}</p>
            <p>Direccion: {marker.direccion}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};