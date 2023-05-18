import React, { useState } from "react";
import { sendData } from "../helpers/FormProfileHelper";

export const FormProfile = (profileEdit, option, id) => {
  const [state, setState] = useState(profileEdit);
console.log(state);
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(state, 2, id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-black">Nombre de usuario</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={state.profile.nombre}
          onChange={(event) =>
            setState({
                profile:{
                ...state.profile,
                nombre: event.target.value,
            }
            })
          }
        />
      </div>
      <div className="form-group">
        <label className="text-black">Correo</label>
        <input
          className="form-control"
          name="correo"
          value={state.profile.correo}
          onChange={(event) =>
            setState({
                profile:{
                ...state.profile,
                correo: event.target.value,
            }})
          }
        ></input>
      </div>
      <div className="form-group">
        <label className="text-black">Identificacion</label>
        <input
          className="form-control"
          name="identificacion"
          value={state.profile.identificacion}
          onChange={(event) =>
            setState({
                profile:{
                ...state.profile,
                identificacion: event.target.value,
            }})
          }
        ></input>
      </div>
      <div className="form-group">
        <label className="text-black">Edad</label>
        <input
          className="form-control"
          name="edad"
          value={state.profile.edad}
          onChange={(event) =>
            setState({
                profile:{
                ...state.profile,
                edad: event.target.value,
            }})
          }
        ></input>
      </div>
      <div className="form-group">
        <label className="text-black">Imagen</label>
        <input
          className="form-control"
          name="edad"
          value={state.profile.img}
          onChange={(event) =>
            setState({
                profile:{
                ...state.profile,
                img: event.target.value,
            }})
          }
        ></input>
      </div>
      <div className="container text-center">
        <button id="btn-enviar" type="submit" className="btn">
          Enviar
        </button>
      </div>
    </form>
  );
};
