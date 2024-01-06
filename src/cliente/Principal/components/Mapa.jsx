import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { apiHotelesGrupal } from "../api/apiHoteles";
import { useNavigate } from "react-router-dom";

export const MyIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const Mapa = ({ hotel, location }) => {
  console.log(location);
  const navigate = useNavigate();
  const [markersData, setMarkersData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await apiHotelesGrupal();
      setMarkersData(response);
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const MapCenter = () => {
    const map = useMap();

    useEffect(() => {
      console.log("Hotel Location:", hotel);
      {
        hotel != null ? (
          hotel.map((h) => {
            if (hotel && h.latitud && h.longitud) {
              map.flyTo([h.latitud, h.longitud], 13);
              markersData.forEach((marker) => {
                if (marker._id === h._id) {

                }
              })

            }
          })) : (
        <h1> </h1>
      )
      }
    }, [map]);

    return null;
  };

  return (
    <MapContainer center={[location.latitud, location.longitud]} zoom={13} style={{ height: "600px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <MapCenter /> {/* Componente para centrar el mapa en la ubicación proporcionada */}

      {markersData.map((marker) => (
        <Marker key={marker._id} position={[marker.latitud, marker.longitud]} icon={MyIcon}>

          <Popup >
            <div className="d-flex align-items-center justify-content-center">
              <a href={`/habitacion?id=${marker._id}`}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(`/habitacion/${marker._id}`);
                }}>
                <img
                  src={marker.img}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  alt="Hotel"
                ></img>
              </a>
            </div>
            <h1 style={{ color: 'black', fontSize: "18px", fontWeight: "bold", textAlign: "center" }} className="mt-4">
              <strong>Hotel: {marker.nombre}</strong>
            </h1>
            <p className="text-center" style={{fontSize: "12px"}}><strong>Pais: </strong>{marker.pais}</p>
            <p className="text-center" style={{fontSize: "12px"}}><strong>Direccion: </strong>{marker.direccion}</p>
            <p className="text-center" style={{fontSize: "10px", color: "red"}}>Click a la imagen para redireccionamiento <i className="fa fa-arrow-up mx-2"></i></p>
            <div className="d-flex align-items-center justify-content-center">
            <a href={`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${marker.latitud},${marker.longitud}`} target="_blank"> 
            <button className="btn btn-primary"> Street view <i className="fa fa-user mx-2"></i></button>
             </a>
             </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};