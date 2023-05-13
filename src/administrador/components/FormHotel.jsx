import React, { useState } from "react";
import { sendData } from "../helpers/hotelHelper";

export const FormHotel = (hotelEdit, option, id) => {
  const [state, setState] = useState(hotelEdit);

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(state, 2, id);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-black">Nombre de Hotel</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={state.hotel.nombre}
            onChange={(event) =>
              setState({
                hotel: {
                  ...state.hotel,
                  nombre: event.target.value,
                },
              })
            }
          />
        </div>
        <div className="form-group">
          <label className="text-black">Direccion</label>
          <textarea
            className="form-control"
            name="direccion"
            value={state.hotel.direccion}
            onChange={(event) =>
              setState({
                hotel: {
                  ...state.hotel,
                  direccion: event.target.value,
                },
              })
            }
          ></textarea>
        </div>
        <div className="form-group">
          <label className="text-black">Telefono</label>
          <textarea
            className="form-control"
            name="telefono"
            value={state.hotel.telefono}
            onChange={(event) =>
              setState({
                hotel: {
                  ...state.hotel,
                  telefono: event.target.value,
                },
              })
            }
          ></textarea>
        </div>
        <div className="form-group">
          <label className="text-black">Valoracion</label>
          <textarea
            className="form-control"
            name="valoracion"
            value={state.hotel.valoracion}
            onChange={(event) =>
              setState({
                hotel: {
                  ...state.hotel,
                  valoracion: event.target.value,
                },
              })
            }
          ></textarea>
        </div>
        <div className="form-group">
          <label className="text-black">URL de imagen</label>
          <textarea
            className="form-control"
            name="img"
            value={state.hotel.img}
            onChange={(event) =>
              setState({
                hotel: {
                  ...state.hotel,
                  img: event.target.value,
                },
              })
            }
          ></textarea>
        </div>
        <div className="container text-center">
          <button id="btn-enviar" type="submit" className="btn">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};
