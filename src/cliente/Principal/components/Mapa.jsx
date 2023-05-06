import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const Mapa = ({hotel}) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Crear el mapa
    const map = L.map(mapRef.current).setView([ 14.64072, -90.51327], 13);

    // Añadir el mapa base
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Añadir marcadores
    const marker1 = L.marker([ 14.64072, -90.49]).addTo(map);
    const marker2 = L.marker([ 14.64072, -90.51]).addTo(map);

    // Añadir popup a los marcadores
    marker1.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
    marker2.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
  }, []);

  return <div ref={mapRef} style={{ height: '800px' }}></div>;
};
