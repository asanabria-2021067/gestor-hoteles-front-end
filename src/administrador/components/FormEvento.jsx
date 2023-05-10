import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { sendData } from "../helpers/formEventoHelper";

export const FormEvento = (eventoEdit, option, id) => {
  const [state, setState] = useState(eventoEdit);
  


  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(state, 2, id);

  };



  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-black">Nombre del evento</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={state.evento.nombre}
          onChange={(event) =>
            setState({
              evento: {
                ...state.evento,
                nombre: event.target.value,
              },
            })
          }
        />
      </div>

      <div className="form-group">
        <label className="text-black">Descripcion</label>
        <br />
        <input
          type="text"
          className="form-control"
          value={state.evento.descripcion}
          onChange={(event) =>
            setState({
              evento: {
                ...state.evento,
                descripcion: event.target.value,
              },
            })
          }
        />
      </div>
      
      <div className="form-group">
        <label className="text-black">Fecha de inicio</label>
        <br />
        <input
          type="date"
          className="form-control"
          value={state.evento.fechaInicio.substring(0, 10)}
          onChange={(event) =>
            setState({
              evento: {
                ...state.evento,
                fechaInicio: event.target.value,
              },
            })
          }
        />
      </div>
      <div className="form-group">
        <label className="text-black">Fecha de finalización</label>
        <br />
        <input
          type="date"
          className="form-control"
          value={state.evento.fechaFinal.substring(0, 10)}
          onChange={(event) =>
            setState({
              evento: {
                ...state.evento,
                fechaFinal: event.target.value,
              },
            })
          }
        />
      </div>
      <div className="form-group">
        <label className="text-black">Tipo</label>
        <input
          type="text"
          className="form-control"
          name="creador"
          value={state.evento.tipo}
          onChange={(event) =>
            setState({
              evento: {
                ...state.evento,
                tipo: event.target.value,
              },
            })
          }
        />
      </div>
      <div className="form-group">
        <label className="text-black">Precio</label>
        <input
          type="number"
          className="form-control"
          name="creador"
          value={state.evento.precio}
          onChange={(event) =>
            setState({
              evento: {
                ...state.evento,
                precio: event.target.value,
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
