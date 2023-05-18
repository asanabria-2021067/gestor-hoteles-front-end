import React, { useEffect, useState } from "react";
import { NavBar } from "../../Navbar-SuperAdmin";
import { Footer } from "../../../Principal/components/Footer";
import Swal from "sweetalert2";
import { CanvaOpciones } from "../../CanvaOpciones";
import { Link, useNavigate } from "react-router-dom";
import { apiHabitaciones } from "../api/apiHabitaciones";
import { habitacion } from "../models/habitacion";
import { UpdateHabitacion } from "./UpdateHabitacion";

export const ListaHabitaciones = () => {
  const [listaHabitacionesA, setListaHabitacionesA] = useState([]);
  console.log(listaHabitacionesA);
  const [showModal, setShowModal] = useState(false);
  const [habitaciones, setHabitaciones] = useState(habitacion);
  const navigate = useNavigate();
  const viewHabitacionesList = async () => {
    const getListaHabitacionesFromApi = await apiHabitaciones();
    setListaHabitacionesA(getListaHabitacionesFromApi);
  };

  useEffect(() => {
    viewHabitacionesList();
  }, [showModal]);

  const eliminarHabitacion = async (id) => {
    let result = await DeleteHabitacion(id);
    if (result) {
      setListaHabitacionesA(
        listaHabitacionesA.filter((habitacion) => habitacion._id !== id)
      );
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar!",
      });
    }
  };
  const handleOpenModal = (u) => {
    setShowModal(true);
    setHabitaciones(u);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <h2>Lista de habitaciones</h2>
        <CanvaOpciones></CanvaOpciones>
        <button
          id="btn-agregar"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            navigate("/agregarHabitacion");
          }}
        >
          Agregar
        </button>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tipo</th>
              <th scope="col">Numero</th>
              <th scope="col">Costo</th>
              <th scope="col">Capacidad</th>
              <th scope="col">descripcion</th>
            </tr>
          </thead>
          <tbody>
            {listaHabitacionesA.map((h) => {
              return (
                <tr key={h._id}>
                  <th scope="row">{h._id}</th>

                  <td>{h.tipo}</td>
                  <td>{h.numero}</td>
                  <td>{h.costo}</td>
                  <td>{h.capacidad}</td>
                  <td>{h.descripcion}</td>
                  <td>
                    <button
                      id="btn-editar"
                      className="btn btn-warning"
                      onClick={() => handleOpenModal(h)}
                    >
                      {" "}
                      Editar
                    </button>
                    <button
                      id="btn-eliminar"
                      className="btn btn-danger"
                      onClick={() => {
                        eliminarHabitacion(h._id);
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
        <UpdateHabitacion
          habitacionEdit={habitaciones}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateHabitacion>
      </div>
      <Footer></Footer>
    </>
  );
};
