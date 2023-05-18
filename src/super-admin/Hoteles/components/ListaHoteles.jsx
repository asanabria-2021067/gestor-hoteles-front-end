import React, { useEffect, useState } from "react";
import { DeleteHoteles, apiHoteles } from "../api/apiHoteles";
import { NavBar } from "../../Navbar-SuperAdmin";
import { Footer } from "../../../Principal/components/Footer";
import Swal from "sweetalert2";
import { CanvaOpciones } from "../../CanvaOpciones";
import { useNavigate } from "react-router-dom";
import { UpdateHotel } from "./UpdateHotel";
import { hotel } from "../models/hotel";

export const ListaHoteles = () => {
  const [listaHotelesA, setListalistaHotelesA] = useState([]);
  console.log(listaHotelesA);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [hoteles, setHoteles] = useState(hotel);

  const viewHotelesList = async () => {
    const getListaHotelesFromApi = await apiHoteles();
    setListalistaHotelesA(getListaHotelesFromApi);
  };

  useEffect(() => {
    viewHotelesList();
  }, [showModal]);

  const handleOpenModal = (u) => {
    setShowModal(true);
    setHoteles(u);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const eliminar = async (id) => {
    let result = await DeleteHoteles(id);
    if (result) {
      setListalistaHotelesA(listaHotelesA.filter((u) => u._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó el hotel correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar el hotel.",
      });
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <h2>Lista de hoteles</h2>
        <CanvaOpciones></CanvaOpciones>
        <button
          id="btn-agregar"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            navigate("/agregarHotelAdmin");
          }}
        >
          Agregar
        </button>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Pais</th>
              <th scope="col">Direccion</th>
              <th scope="col">Reservaciones</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {listaHotelesA.map((u) => {
              return (
                <tr key={u._id}>
                  <th scope="row">{u._id}</th>

                  <td>{u.nombre}</td>
                  <td>{u.pais}</td>
                  <td>{u.direccion}</td>
                  <td>{u.reservaciones}</td>
                  <td>
                    <button
                      id="btn-editar"
                      className="btn btn-warning"
                      onClick={() => handleOpenModal(u)}
                    >
                      {" "}
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
        <button
          id="btn-agregar"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            navigate("/estadisticasHotel");
          }}
        >
          Estadisticas Hoteles
        </button>
        <UpdateHotel
          hotelEdit={hoteles}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateHotel>
      </div>
      <Footer></Footer>
    </>
  );
};
