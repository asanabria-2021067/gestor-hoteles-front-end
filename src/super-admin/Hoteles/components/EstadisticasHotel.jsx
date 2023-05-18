import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { apiHoteles } from "../api/apiHoteles";
import { NavBar } from "../../Navbar-SuperAdmin";

export const EstadisticasHotel = () => {
  const [listaHoteles, setListaHoteles] = useState([]);

  useEffect(() => {
    fetchHoteles();
  }, []);

  const fetchHoteles = async () => {
    try {
      const listaHotelesFromApi = await apiHoteles();
      const listaHotelesOrdenada = listaHotelesFromApi.sort((a, b) => b.reservaciones - a.reservaciones);
      setListaHoteles(listaHotelesOrdenada);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <h1>Gráfica en base a reservaciones por hotel</h1>
        <BarChart className="mt-4" width={800} height={500} data={listaHoteles}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="reservaciones" fill="#002855" label={{ position: "top" }} />
        </BarChart>
      </div>
    </>
  );
};