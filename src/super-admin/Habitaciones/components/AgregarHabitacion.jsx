import React, { useEffect, useState } from "react";
import { sendData } from "../helpers/habitacionHelper";
import { habitacion } from "../models/habitacion";
import { apiHotelesGrupal } from "../../../cliente/Principal/api/apiHoteles";

export const CreateHabitacion = () => {
    const [agregar, setAgregar] = useState(habitacion);
    const [hotel, setHotel] = useState([])
    console.log(hotel);
    console.log(agregar)
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1, 0);
        // Llamar a la función enviarDatos() y pasar el estado actual como argumento
    };

    const fetchHoteles = async () => {
        const response = await apiHotelesGrupal();
        if (response) {
            setHotel(response);
        }
    };

    useEffect(() => {
        fetchHoteles()
    }, [])


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
                        <label className="text-black">Capacidad</label>
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
                    {hotel ? (
                        <div className="form-group">
                            <label className="text-black">Hotel</label>
                            <select
                                value={agregar.habitacion?.hotel}
                                className="form-control"
                                name="hotel"
                                onChange={(event) =>
                                    setAgregar({
                                        habitacion: {
                                            ...agregar.habitacion,
                                            hotel: event.target.value,
                                        },
                                    })
                                }
                                style={{height:"6vh",overflow: "scroll", fontSize: "13px", fontWeight: "bold" }}
                            >
                                {hotel.map((h) => (
                                    <option key={h._id} value={h._id}
                                    >
                                        {h.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <div className="form-group">
                            <label className="text-black">Hotel</label>
                            <input
                                type="text"
                                className="form-control"
                                name="hotel"
                                onChange={(event) =>
                                    setAgregar({
                                        habitacion: {
                                            ...agregar.habitacion,
                                            hotel: event.target.value,
                                        },
                                    })
                                }
                            ></input>
                        </div>
                    )}


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
