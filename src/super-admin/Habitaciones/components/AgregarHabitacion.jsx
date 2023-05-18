import React, { useState } from "react";
import { sendData } from "../helpers/habitacionHelper";
import { habitacion } from "../models/habitacion";

export const CreateHabitacion = () => {
    const [agregar, setAgregar] = useState(habitacion);
    console.log(agregar)
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData( agregar , 1, 0);
        // Llamar a la función enviarDatos() y pasar el estado actual como argumento
    };

    return (
        <>
            <div className="container">
                <h1 id="create-tarea">CREAR HABITACION</h1>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">Numero</label>
                        <input
                            type="text"
                            className="form-control"
                            name="numero"
                            onChange={(event) =>
                                setAgregar({
                                    habitacion: {
                                        ...agregar.habitacion,
                                        numero: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Descripcion</label>
                        <input
                            type="text"
                            className="form-control"
                            name="descripcion"
                            onChange={(event) =>
                                setAgregar({
                                    habitacion: {
                                        ...agregar.habitacion,
                                        descripcion: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Costo</label>
                        <input
                            type="text"
                            className="form-control"
                            name="telefono"
                            onChange={(event) =>
                                setAgregar({
                                    habitacion: {
                                        ...agregar.habitacion,
                                        costo: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Cantidad de personas</label>
                        <input
                            type="text"
                            className="form-control"
                            name="cantidad_personas"
                            onChange={(event) =>
                                setAgregar({
                                    habitacion: {
                                        ...agregar.habitacion,
                                        cantidad_personas: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Tipo de habitacion</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tipo_habitacion"
                            onChange={(event) =>
                                setAgregar({
                                    habitacion: {
                                        ...agregar.habitacion,
                                        tipo_habitacion: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">URL de imagen</label>
                        <input
                            type="text"
                            className="form-control"
                            name="img"
                            onChange={(event) =>
                                setAgregar({
                                    habitacion: {
                                        ...agregar.habitacion,
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
            </div>
        </>
    );
};
