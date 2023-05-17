import React, { useState } from "react";
import { Cards } from "./Cards-Hoteles";
import { apiHoteles } from "../api/apiHoteles";

export const Buscador = () => {
  const [hotel, setHotel] = useState("");
  const [resultado, setResultado] = useState([]);
  const [mapInstance, setMapInstance] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await apiHoteles(hotel);
    setResultado(results);
};

  return (
    <>
      <div className="container">
        <div className="search-container">
          <form className="formBusca" onSubmit={handleSearch}>
            <div className="search-box">
              <input
                type="text"
                placeholder="¿A dónde te gustaría ir?"
                value={hotel}
                onChange={(e) => setHotel(e.target.value)}
              />
            </div>

            <div className="submit-box">
              <button className="btnBuscar" type="submit">Buscar</button>
            </div>
          </form>
        </div>
        <Cards hotel={resultado} mapInstance={mapInstance} setMapInstance={setMapInstance} />
      </div>
    </>
  );
};