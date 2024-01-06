import React, { useEffect, useState } from "react";
import { Cards } from "./Cards-Hoteles";
import { apiHoteles } from "../api/apiHoteles";
import { Container } from "react-bootstrap";
import { SearchIcon } from "../../../Principal/components/SearchIcon";
import { Popover, Overlay } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Buscador = ({location}) => {
  const [hotel, setHotel] = useState("");
  const [resultado, setResultado] = useState([]);
  const [mapInstance, setMapInstance] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const [resultadoCards, setResultadoCards] = useState([]);
  const [target, setTarget] = useState(null)
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await apiHoteles(hotel);
    setResultadoCards(results);
    setShowPopover(false)
  };

  const handleSearchChange = async (e) => {
    const value = e.target.value;
    console.log(value);
    
    setHotel(value);
    if (value.length >= 4) {
      const results = await apiHoteles(value);
      if (results) {
        setResultado(results);
        setTarget(e.target)
        setShowPopover(true)
      }
    } else {
      setResultado([]);
      setShowPopover(false);
    }
  };


  return (
    <>
      <Container className="container" id="containerBuscador" style={{marginTop: "-6%"}}>
        <form className="formBusca mb-4 mt-4" onSubmit={handleSearch}>
          <div className="search-box">
            <input
              type="search"
              className="text-center"
              placeholder="           Busca tu proximo destino aquí"
              value={hotel}
              onChange={handleSearchChange}
            />
          </div>
          <div className="submit-box">
            <button className="btnBuscar d-flex align-items-center justify-content-center" type="submit"><SearchIcon></SearchIcon></button>
          </div>
        </form>
        <div className="popover-container" style={{ display: showPopover ? "block" : "none" }}>
          <div className="popover-content">
            <h3  style={{color: 'black', fontSize: "25px", fontWeight: "bold", textAlign: "center"}}>RESULTADOS:</h3>
            {resultado.map((item, index) => (
               <a key={index} className="buscadorPopover" href={`/habitacion?id=${item._id}`}  
               onClick={(event) => {
                 event.preventDefault();
                 navigate(`/habitacion/${item._id}`);
               }}>
              <div className="d-flex align-items-center mt-2" id="busqueda" >
                <img src={item.img} alt="" style={{width: "08%", height: "20%"}} /> 
              <h1 className="ms-2 mt-2" style={{color: 'black', fontSize: "15px", fontWeight: "bold", textAlign: "center"}}>{item.nombre}</h1>
              </div>
              </a>
            ))}
          </div>
        </div>
        <Cards hotel={resultadoCards} location={location} className="mt-5" />
      </Container>
    </>
  );
};