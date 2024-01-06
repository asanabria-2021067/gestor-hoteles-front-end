import React, { useEffect, useState } from "react";
import { DeleteServicio, apiServicio } from "../api/apiServicio";
import { NavBar } from "../../Navbar-SuperAdmin";
import { Footer } from "../../../Principal/components/Footer";
import { CanvaOpciones } from "../../CanvaOpciones";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UpdateServicio } from "./UpdateServicio";
import { servicio } from "../models/servicio";

export const ListaServicio = () => {
  const [listaServicios, setListaServicios] = useState([]);
  console.log(listaServicios);
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
        <h2 style={{color: 'black', fontSize: "45px", fontWeight: "bold", textAlign: "center"}}>Lista de servicios</h2>
        <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
        <button
          id="btn-agregar"
          className="btn btn-primary"
          style={{width: "80%", height: "40%", fontSize: "20px", textTransform: "uppercase"}}
          onClick={(event) => {
            event.preventDefault();
            navigate("/agregarServicioAdmin");
          }}
        >
          <i className="fa fa-save mx-2"></i><strong>Agregar</strong>
        </button>
        </div>
        <div className="table-responsive mb-5">
        <table className="table text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Imagen</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Hotel</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {listaServicios.map((s) => {
              return (
                <tr key={s._id}>
                  <th><img
                        src={s.img}
                        alt={s.nombre}
                        style={{
                          borderRadius: "10%",
                          width: "100px",
                          height: "auto",
                        }}
                      /></th>

                  <td>{s.nombre}</td>
                  <td>Q.{s.precio}</td>
                  <td>{s.descripcion}</td>
                  <td><strong>{s.hotel?.nombre}</strong></td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleOpenModal(s)}
                    >
                       <i className="fa fa-user mx-2"></i><strong>Editar</strong>
                    </button>
                    <button
                      id="btn-eliminar"
                      className="btn btn-danger mx-2"
                      onClick={() => {
                        eliminar(s._id);
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
