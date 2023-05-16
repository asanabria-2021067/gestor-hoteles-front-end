import React, { useEffect, useState } from "react";
import { DeleteEvento, apiEventos } from "../api/apiEventos";
import { Footer } from "../../../Principal/components/Footer";
import { NavBar } from "../../../Principal/components/NavBar";
import { CanvaOpciones } from "../../CanvaOpciones";
import Swal from "sweetalert2";
import { evento } from "../models/evento";
import { UpdateEvento } from "./UpdateEvento";
import { useNavigate } from "react-router-dom";

export const ListaEventos = () => {
  const [listaEventosAdmin, setListaEventosAdmin] = useState([]);
  const [eventos, setEvento] = useState(evento);
  const navigate = useNavigate();
  console.log(evento);
  console.log(listaEventosAdmin);
  const [showModal, setShowModal] = useState(false);

  const viewEventosList = async () => {
    const getListEventosFromApi = await apiEventos();
    setListaEventosAdmin(getListEventosFromApi);
  };

  useEffect(() => {
    viewEventosList();
  }, [showModal]);

  const handleOpenModal = (e) => {
    setShowModal(true);
    setEvento(e);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const eliminar = async (id) => {
    let result = await DeleteEvento(id);
    if (result) {
      setListaEventosAdmin(listaEventosAdmin.filter((u) => u._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó el evento correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar el evento.",
      });
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <CanvaOpciones></CanvaOpciones>
        <h2>Lista de eventos</h2>
        <button
          id="btn-agregar"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            navigate("/agregarEventoAdmin");
          }}
        >
          Agregar
        </button>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Fecha Inicio</th>
              <th scope="col">Fecha Fin</th>
              <th scope="col">Precio</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {listaEventosAdmin.map((e) => {
              return (
                <tr key={e._id}>
                  <th scope="row">{e._id}</th>

                  <td>{e.nombre}</td>
                  <td>{e.fechaInicio.substring(0,10)}</td>
                  <td>{e.fechaFinal.substring(0,10)}</td>
                  <td>{e.precio}</td>
                  <td>
                    <button
                      id="btn-editar"
                      className="btn btn-warning"
                      onClick={() => handleOpenModal(e)}
                    >
                      {" "}
                      Editar
                    </button>
                    <button
                      id="btn-eliminar"
                      className="btn btn-danger"
                      onClick={() => {
                        eliminar(e._id);
                        s;
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
        <UpdateEvento
          eventoEdit={eventos}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateEvento>
      </div>
      <br />
      <Footer></Footer>
    </>
  );
};
