import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const MapaHotel = ({ latitud, longitud }) => {
  const navigate = useNavigate();
  const [markersData, setMarkersData] = useState({
    latitud: latitud,
    longitud: longitud
  });
  
  const MapCenter = () => {
    const map = useMap();
  };

  return (
    <MapContainer center={[latitud, longitud]} zoom={16.5} style={{ height: "350px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <MapCenter />

        <Marker key={markersData._id} position={[markersData.latitud, markersData.longitud]} icon={MyIcon}>
        </Marker>
    </MapContainer>
  );
};