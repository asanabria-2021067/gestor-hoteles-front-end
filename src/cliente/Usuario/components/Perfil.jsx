import React, { useEffect, useState } from "react";
import { apiEliminarUsuarioById, apiUsuarioById } from "../api/apiUsuarios";
import { UpdateProfile } from "./UpdateProfile";
import { NavBar } from "../../Navbar-Usuario";
import { Footer } from "../../../Principal/components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
var tokenId = localStorage.getItem("token");

export const Perfil = () => {
  const [usuario, setUsuario] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  console.log(usuario)
  const eliminarUser = async () => {
    await apiEliminarUsuarioById(tokenId);
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    window.location.href = "/login";
  };

  const viewCliente = async () => {
    const getCliente = await apiUsuarioById(tokenId);
    setUsuario(getCliente);
  };

  useEffect(() => {
    viewCliente();
  }, [showModal]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
          <div id="perfil" className="d-flex flex-column align-items-center mt-4">
            <div className="tituloperfil text-right">
              <img src={usuario.img} alt="..." className="img-fluid rounded-circle" style={{width: "100px"}} />
              </div>
              <div className="mt-2">
              <h1 style={{color: 'black', fontSize: "40px", fontWeight: "bold", textAlign: "center"}}>
                {usuario.nombre} {usuario.apellido}
              </h1>
            </div>
            <br />
            <div className="infocandidato">
              <MDBCard className="mb-3">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="4">
                      <MDBCardText><strong>Nombre:</strong></MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                      <MDBCardText className="text-muted">{usuario.nombre} {usuario.apellido}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol sm="4">
                      <MDBCardText><strong>Correo:</strong></MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                      <MDBCardText className="text-muted">{usuario.correo}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol sm="4">
                      <MDBCardText><strong>Telefono:</strong></MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                      <MDBCardText className="text-muted">(+502) {usuario.telefono}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="mg-top-10 mb-5 d-flex align-items-center justify-content-center gap-2">
              <a
                className="btn btn-warning"
                id="boton"
                onClick={() => handleOpenModal()}
              >
                Editar <i className="fa fa-user mx-2"></i>
              </a>
              <a
                className="btn btn-danger"
                id="boton"
                onClick={eliminarUser}
              >
                Eliminar <i className="fa fa-trash mx-2"></i>
              </a>
              <button className="btn btn-primary"
                onClick={(event) => {
                  event.preventDefault();
                  navigate(`/historialReservacion`);
                }}
              >
                Historial de reservaciones <i className="fa fa-history mx-2"></i>
              </button>
            </div>
            <UpdateProfile
            profileEdit={usuario}
            isOpen={showModal}
            onClose={() => handleCloseModal()}
          ></UpdateProfile>
</div>
          </div>
          <Footer></Footer>
    </>
  );
};