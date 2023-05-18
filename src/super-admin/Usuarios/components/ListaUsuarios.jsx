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
        <h2>Lista de Usuarios</h2>
        <button
          id="btn-agregar"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            navigate("/agregarUsuariosAdmin");
          }}
        >
          Agregar
        </button>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
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
                  <th scope="row">{u._id}</th>
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
                      Editar
                    </button>
                    <button
                      id="btn-eliminar"
                      className="btn btn-danger"
                      onClick={() => {
                        eliminar(u._id);
                      }}
                    >
                      {" "}
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
