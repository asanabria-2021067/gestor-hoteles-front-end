import React, { useState } from "react";
import { Cards } from "./Cards-Hoteles";
import { apiHoteles } from "../api/apiHoteles";

export const Buscador = () => {
  const [hotel, setHotel] = useState(""); //El hotel que se escribe
  const [resultado, setResultado] = useState([]); //El hotel que se envia a las cards

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await apiHoteles(hotel);
    setResultado(results);
  };

  return (
    <>
      <form className="mb-2" onSubmit={handleSearch} aria-label="form">
        <div style={{ display: "flex" }}>
          <input
            type="search"
            placeholder="Busca tu proximo destino..."
            id="buscadorHoteles"
            value={hotel}
            style={{ width: "80%", marginRight: "10px" }}
            onChange={(e) => setHotel(e.target.value)}
          ></input>
          <button type="submit" className="btn btn-primary" style={{ width: "10%", marginTop: "1%" }}>
            Buscar
          </button>
        </div>
      </form>
      <Cards hotel={resultado} />
    </>
  );
};
