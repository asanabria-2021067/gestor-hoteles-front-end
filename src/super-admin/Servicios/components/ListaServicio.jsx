import React, { useEffect, useState } from "react";
import { DeleteServicio, apiServicio } from "../api/apiServicio";
import { NavBar } from "../../../Principal/components/NavBar";
import { Footer } from "../../../Principal/components/Footer";
import { CanvaOpciones } from "../../CanvaOpciones";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UpdateServicio } from "./UpdateServicio";
import { servicio } from "../models/servicio";

export const ListaServicio = () => {
  const [listaServicios, setListaServicios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [servicios, setServicios] = useState(servicio);
  const navigate = useNavigate();
  const viewServiciosList = async () => {
    const getListServicioFromApi = await apiServicio();
    setListaServicios(getListServicioFromApi);
  };

  const handleOpenModal = (s) => {
    setShowModal(true);
    setServicios(s);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    viewServiciosList();
  }, [showModal]);

  const eliminar = async (id) => {
    let result = await DeleteServicio(id);
    if (result) {
      setListaServicios(listaServicios.filter((u) => u._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó el servicio correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar el servicio.",
      });
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <CanvaOpciones></CanvaOpciones>
        <h2>Lista de servicios</h2>
        <button
          id="btn-agregar"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            navigate("/agregarServicioAdmin");
          }}
        >
          Agregar
        </button>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Descripcion</th>
            </tr>
          </thead>
          <tbody>
            {listaServicios.map((s) => {
              return (
                <tr key={s._id}>
                  <th scope="row">{s._id}</th>

                  <td>{s.nombre}</td>
                  <td>{s.precio}</td>
                  <td>{s.descripcion}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleOpenModal(s)}
                    >
                      Editar
                    </button>
                    <button
                      id="btn-eliminar"
                      className="btn btn-danger"
                      onClick={() => {
                        eliminar(s._id);
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
        <UpdateServicio
          servicioEdit={servicios}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateServicio>
      </div>
      <Footer></Footer>
    </>
  );
};
