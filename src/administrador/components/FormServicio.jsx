import React, { useState } from 'react'
import { sendData } from '../helpers/formServicioHelper';

export const FormServicio = (servicioEdit, option, id) => {
    console.log(servicioEdit);
    const [state, setState] = useState(servicioEdit);

    console.log(state);
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(state, 2, id);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-black">Nombre del servicio:</label>
                    <input
                        className="form-control"
                        value={state.servicio.nombre}
                        onChange={(event) =>
                            setState({
                                servicio: {
                                    ...state.servicio,
                                    nombre: event.target.value,
                                },
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label className="text-black">Descripcion:</label>
                    <input
                        className="form-control"
                        value={state.servicio.descripcion}
                        onChange={(event) =>
                            setState({
                                servicio: {
                                    ...state.descripcion,
                                    descripcion: event.target.value,
                                },
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label className="text-black">Precio:</label>
                    <input
                        className="form-control"
                        value={state.servicio.precio}
                        onChange={(event) =>
                            setState({
                                servicio: {
                                    ...state.hotel,
                                    precio: event.target.value,
                                },
                            })
                        }
                    />
                </div>
                <div className="container text-center">
                    <button id="btn-enviar" type="submit" className="btn">
                        Enviar
                    </button>
                </div>
            </form>
        </>
    )
}
