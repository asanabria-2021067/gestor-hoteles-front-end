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
        <CanvaOpciones></CanvaOpciones>
        <h2 style={{color: 'black', fontSize: "45px", fontWeight: "bold", textAlign: "center"}}>Lista de habitaciones</h2>
        <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
        <button
          id="btn-agregar"
          className="btn btn-primary"
          style={{width: "80%", height: "40%", fontSize: "20px", textTransform: "uppercase"}}
          onClick={(event) => {
            event.preventDefault();
            navigate("/agregarHabitacion");
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
              <th scope="col">Tipo</th>
              <th scope="col">Numero</th>
              <th scope="col">Costo</th>
              <th scope="col">Capacidad</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Hotel</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {listaHabitacionesA.map((h) => {
              return (
                <tr key={h._id}>
                  <th><img
                        src={h.img}
                        alt={h.nombre}
                        style={{
                          borderRadius: "10%",
                          width: "100px",
                          height: "auto",
                        }}
                      /></th>

                  <td>{h.tipo}</td>
                  <td>{h.numero}</td>
                  <td>Q.{h.costo}</td>
                  <td><i className="fa fa-user mx-2"></i>{h.capacidad}</td>
                  <td>{h.descripcion}</td>
                  <td><strong>{h.hotel?.nombre}</strong></td>
                  <td>
                    <button
                      id="btn-editar"
                      className="btn btn-warning"
                      onClick={() => handleOpenModal(h)}
                    >
                      <i className="fa fa-user mx-2"></i><strong>Editar</strong>
                    </button>
                    <button
                      id="btn-eliminar"
                      className="btn btn-danger mt-2"
                      onClick={() => {
                        eliminarHabitacion(h._id);
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
