import React, { useEffect, useState } from "react";
import { apiUsuarios } from "../api/apiUsuarios";
import { Footer } from "../../../Principal/components/Footer";
import { NavBar } from "../../../Principal/components/NavBar";
import { CanvaOpciones } from "../../CanvaOpciones";

export const ListaUsuarios = () => {
  const [listaUsuariosA, setListaUsuariosA] = useState([]);
  console.log(listaUsuariosA);
  const [showModal, setShowModal] = useState(false);

  const viewUsuariosList = async () => {
    const getListUsuariosFromApi = await apiUsuarios();
    setListaUsuariosA(getListUsuariosFromApi);
  };

  useEffect(() => {
    viewUsuariosList();
  }, [showModal]);

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <h2>Lista de Usuarios</h2>
        <CanvaOpciones></CanvaOpciones>
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
        {/* <UpdateEvento
          eventoEdit={eventos}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateEvento> */}
      </div>
      <Footer></Footer>
    </>
  );
};
