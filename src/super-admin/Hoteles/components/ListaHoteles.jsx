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
      <CanvaOpciones></CanvaOpciones>
      <h2 style={{color: 'black', fontSize: "45px", fontWeight: "bold", textAlign: "center"}}>Lista de hoteles</h2>
      <div className="d-flex align-items-center justify-content-center mt-3 mb-5"> 
        <button
          id="btn-agregar"
          className="btn btn-primary"
          style={{width: "80%", height: "40%", fontSize: "20px", textTransform: "uppercase"}}
          onClick={() => navigate("/agregarHotelAdmin")}
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
                    <td>
                      <img
                        src={u.img}
                        alt={u.nombre}
                        style={{
                          borderRadius: "10%",
                          width: "100px",
                          height: "auto",
                        }}
                      />
                    </td>

                    <td className="mt-4">
                      <strong>{u.nombre}</strong>
                    </td>
                    <td>{u.pais}</td>
                    <td>{u.direccion}</td>
                    <td>{u.reservaciones}</td>
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
        <div className="d-flex align-items-center justify-content-center mb-4">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/estadisticasHotel")}
          style={{width: "70%"}}
        >
          <i className="fa fa-history mx-2"></i>Estadisticas Hoteles
        </button>
        </div>
        <UpdateHotel
          hotelEdit={hoteles}
          isOpen={showModal}
          onClose={handleCloseModal}
        ></UpdateHotel>
      </div>
      <Footer></Footer>
    </>
  );
};
