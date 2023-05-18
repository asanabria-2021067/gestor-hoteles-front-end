import React, { useState } from "react";
import { sendData } from "../helpers/habitacionHelper";

export const FormHabitacion = (HabitacionEdit, option, _id) => {
    const [state, setState] = useState(HabitacionEdit);
    console.log(HabitacionEdit)
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(state, 2, _id);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-black">Numero:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="numero"
                        value={state.habitacion.numero}
                        onChange={(event) =>
                            setState({
                                habitacion: {
                                    ...state.habitacion,
                                    numero: event.target.value,
                                },
                            })
                        }
                    />
                </div>

                <div className="form-group">
                    <label className="text-black">Descripcion:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="descripcion"
                        value={state.habitacion.descripcion}
                        onChange={(event) =>
                            setState({
                                habitacion: {
                                    ...state.habitacion,
                                    descripcion: event.target.value,
                                },
                            })
                        }
                    ></input>
                </div>

                <div className="form-group">
                    <label className="text-black">Costo:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="costo"
                        value={state.habitacion.costo}
                        onChange={(event) =>
                            setState({
                                habitacion: {
                                    ...state.habitacion,
                                    costo: event.target.value,
                                },
                            })
                        }
                    ></input>
                </div>

                <div className="form-group">
                    <label className="text-black">Capacidad:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="cantidad_personas"
                        value={state.habitacion.capacidad}
                        onChange={(event) =>
                            setState({
                                habitacion: {
                                    ...state.habitacion,
                                    cantidad_personas: event.target.value,
                                },
                            })
                        }
                    ></input>
                </div>

                <div className="form-group">
                    <label className="text-black">Tipo de habitacion:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="tipo_habitacion"
                        value={state.habitacion.tipo}
                        onChange={(event) =>
                            setState({
                                habitacion: {
                                    ...state.habitacion,
                                    tipo_habitacion: event.target.value,
                                },
                            })
                        }
                    ></input>
                </div>

                <div className="form-group">
                    <label className="text-black">URL de imagen:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="img"
                        value={state.habitacion.img}
                        onChange={(event) =>
                            setState({
                                habitacion: {
                                    ...state.habitacion,
                                    img: event.target.value,
                                },
                            })
                        }
                    ></input>
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
