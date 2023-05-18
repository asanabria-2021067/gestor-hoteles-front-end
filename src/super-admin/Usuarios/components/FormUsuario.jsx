import React, { useState } from "react";
import { sendData } from "../helpers/formUsuarioHelper";
import { NavBar } from '../../../Principal/components/NavBar';
import { Footer } from '../../../Principal/components/Footer';

export const FormUsuario = (usuarioEdit, option, id) => {
  
  const [state, setState] = useState(usuarioEdit);
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(state, 2, id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-black">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={state.usuario.nombre}
          onChange={(event) =>
            setState({
              usuario: {
                ...state.usuario,
                nombre: event.target.value,
              },
            })
          }
        />
      </div>

      <div className="form-group">
        <label className="text-black">Correo</label>
        <br />
        <input
          type="text"
          className="form-control"
          value={state.usuario.correo}
          onChange={(event) =>
            setState({
                usuario: {
                ...state.usuario,
                correo: event.target.value,
              },
            })
          }
        />
      </div>
      
      <div className="form-group">
        <label className="text-black">Identificacion</label>
        <br />
        <input
          type="text"
          className="form-control"
          value={state.usuario.identificacion}
          onChange={(event) =>
            setState({
                usuario: {
                ...state.usuario,
                identificacion: event.target.value,
              },
            })
          }
        />
      </div>
      <div className="form-group">
        <label className="text-black">Edad</label>
        <br />
        <input
          type="text"
          className="form-control"
          value={state.usuario.edad}
          onChange={(event) =>
            setState({
                usuario: {
                ...state.usuario,
                edad: event.target.value,
              },
            })
          }
        />
      </div>
      <div className="form-group">
        <label className="text-black">Imagen</label>
        <input
          type="text"
          className="form-control"
          name="creador"
          value={state.usuario.img}
          onChange={(event) =>
            setState({
                usuario: {
                ...state.usuario,
                img: event.target.value,
              },
            })
          }
        />
      </div>
      <div className="form-group">
        <label className="text-black">Rol</label>
        <input
          type="text"
          className="form-control"
          name="creador"
          value={state.usuario.rol}
          onChange={(event) =>
            setState({
                usuario: {
                ...state.usuario,
                rol: event.target.value,
              },
            })
          }
        />
      </div>
      <div className="container text-center">

        <button id='btn-enviar' type="submit" className="btn">
          Enviar
        </button>
      </div>
    </form>
  );
};
