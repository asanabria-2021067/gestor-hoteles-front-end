import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUsuarioById } from "../cliente/Usuario/api/apiUsuarios";
import { apiHotelesPorAdmin } from "../cliente/Principal/api/apiHoteles";
const token = localStorage.getItem("token");
export const PrincipalAdmin = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState([]);
  console.log(usuario);
  const [hotel, setHotel] = useState([]);
  console.log(hotel);

  const viewCliente = async () => {
    const getCliente = await apiUsuarioById(token);
    setUsuario(getCliente);
  };
  const viewHotelPorAdmin = async () => {
    const getHotel = await apiHotelesPorAdmin();
    setHotel(getHotel);
  }

  useEffect(() => {
    viewCliente();
  }, [])
  
  useEffect(() => {
    viewHotelPorAdmin()
  }, [usuario])
  


  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "200vh" }}>
      <div className="row">
        <div className="col-md-6">
          <div className="card text-center" style={{ borderRadius: "30px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.60)", height: "600px", width: "400px" }}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title" style={{ marginBottom: "20px", fontSize: "40px" }}>Administrador</h5>
              <button
                className="btn btn-primary"
                style={{ fontSize: "30px", backgroundColor: "#002855", borderRadius: "20px" ,paddingLeft: "80px", paddingRight: "80px" }}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(`/miHotel/${hotel._id}`);
                }}
              >
                Ir
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center" style={{ borderRadius: "30px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.60)", height: "600px", width: "400px" }}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title" style={{ marginBottom: "20px", fontSize: "40px" }}>Cliente</h5>
              <button
                className="btn btn-primary "
                style={{ fontSize: "30px", backgroundColor: "#002855", borderRadius: "20px", paddingLeft: "80px", paddingRight: "80px" }}
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/hoteles");
                }}
              >
                Ir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
