import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { apiHotelesGrupal } from "../api/apiHoteles";

export const Mapa = ({ hotel }) => {
  const [markersData, setMarkersData] = useState([]);
  // Llamar a la API y almacenar los datos en el estado
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiHotelesGrupal();
        setMarkersData(response); // Almacena los datos en el estado
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <MapContainer
      center={[14.64072, -90.51327]}
      zoom={13}
      style={{ height: "500px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {markersData.map((marker) => (
        <Marker key={marker._id} position={[marker.latitud, marker.longitud]}>
          <Popup>
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
