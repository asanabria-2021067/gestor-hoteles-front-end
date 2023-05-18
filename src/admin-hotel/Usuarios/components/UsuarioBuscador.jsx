import React, { useEffect, useState } from "react";
import { CardsUsuarios } from "./Cards-Usuarios";
import { apiHotelesPorAdmin } from "../../../cliente/Principal/api/apiHoteles";
import { apiUsuarioHotel } from "../api/apiUsuario";
import { NavBar } from "../../Navbar-Admin";

export const UsuarioBuscador = () => {
  const [usuario, setUsuario] = useState("");
  const [resultado, setResultado] = useState([]);
  const [hotel, setHotel] = useState([]);
  console.log(hotel);
  const viewHotelPorAdmin = async () => {
      const getHotel = await apiHotelesPorAdmin();
      setHotel(getHotel);
    }
useEffect(() => {
viewHotelPorAdmin();
}, [])
  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await apiUsuarioHotel(usuario, hotel._id);
    setResultado(results);
};

  return (
    <>
    <NavBar/>
      <div className="container">
        <div className="search-container">
          <form className="formBusca" onSubmit={handleSearch}>
            <div className="search-box">
              <input
                type="text"
                placeholder="Busca un Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="submit-box">
              <button className="btnBuscar" type="submit">Buscar</button>
            </div>
          </form>
        </div>
        <CardsUsuarios usuario={resultado} />
      </div>
    </>
  );
};