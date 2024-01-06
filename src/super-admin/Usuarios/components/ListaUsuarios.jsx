import React, { useEffect, useState } from "react";
import { apiUsuarios } from "../api/apiUsuarios";
import { Footer } from "../../../Principal/components/Footer";
import { NavBar } from "../../Navbar-SuperAdmin";
import { CanvaOpciones } from "../../CanvaOpciones";
import { UpdateUsuario } from "./UpdateUsuario";
import { usuario } from "../models/usuario";
import { useNavigate } from "react-router-dom";

export const ListaUsuarios = () => {
  const [listaUsuariosA, setListaUsuariosA] = useState([]);
  console.log(listaUsuariosA);
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState(usuario);
  const [showModal, setShowModal] = useState(false);

  const viewUsuariosList = async () => {
    const getListUsuariosFromApi = await apiUsuarios();
    setListaUsuariosA(getListUsuariosFromApi);
  };

  const handleOpenModal = (u) => {
    setShowModal(true);
    setUsuarios(u);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    viewUsuariosList();
  }, [showModal]);

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <CanvaOpciones></CanvaOpciones>
        <h2 style={{color: 'black', fontSize: "45px", fontWeight: "bold", textAlign: "center"}}>Lista de Usuarios</h2>
        <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
        <button
          id="btn-agregar"
          className="btn btn-primary"
          style={{width: "80%", height: "40%", fontSize: "20px", textTransform: "uppercase"}}
          onClick={(event) => {
            event.preventDefault();
            navigate("/agregarUsuariosAdmin");
          }}
        >
          <i className="fa fa-save mx-2"></i><strong>Agregar</strong>
        </button>
        </div>
        <div className="table-responsive">
        <table className="table text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Imagen</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Rol</th>
              <th scope="col">Identificacion</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {listaUsuariosA.map((u) => {
              return (
                <tr key={u._id}>
                  <th> <img
                        src={u.img}
                        alt={u.nombre}
                        style={{
                          borderRadius: "100%",
                          width: "50px",
                          height: "50px",
                        }}
                      /></th>
                  <td>{u.nombre}</td>
                  <td>{u.correo}</td>
                  <td>{u.rol}</td>
                  <td>{u.identificacion}</td>
                  <td>
                    <button
                      id="btn-editar"
                      className="btn btn-warning"
                      onClick={() => handleOpenModal(u)}
                    >
                       <i className="fa fa-user mx-2"></i><strong>Editar</strong>
                    </button>
                    <button
                      id="btn-eliminar"
                      className="btn btn-danger mt-2"
                      onClick={() => {
                        eliminar(u._id);
                      }}
                    >
                      <i className="fa fa-trash mx-2"></i><strong>Eliminar</strong>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
        <UpdateUsuario
          usuarioEdit={usuarios}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateUsuario>
      </div>
      <Footer></Footer>
    </>
  );
};
