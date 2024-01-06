import React, { useEffect, useState } from 'react';
import { evento } from '../models/evento';
import { Modal } from "react-bootstrap";
import { sendData } from '../helpers/formEventoHelper';
import { NavBar } from '../../Navbar-SuperAdmin';
import { Footer } from '../../../Principal/components/Footer';
import { apiHotelesGrupal } from "../../../cliente/Principal/api/apiHoteles";
import { apiTipos } from '../api/apiEventos';

export const CreateEventos = () => {
    const [agregar, setAgregar] = useState(evento);
    const [tipos, setTipos] = useState([]);
    console.log(tipos);
    const [hotel, setHotel] = useState([])
    const fechaHoy = new Date().toISOString().split("T")[0];

    const fetchHoteles = async () => {
        const response = await apiHotelesGrupal();
        if (response) {
            setHotel(response);
        }
    };

    const fetchEventos = async () => {
        const response = await apiTipos();
        if (response) {
            setTipos(response);
        }
    };

    useEffect(() => {
        fetchEventos()
    }, [])
    

    useEffect(() => {
        fetchHoteles()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1, 0);
    };

    return (
        <>
        <NavBar></NavBar>
            <div className='container'>
                <h1 style={{color: 'black', fontSize: "40px", fontWeight: "bold", textAlign: "center"}}>Crear evento</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="text-black">Nombre evento</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            onChange={(event) =>
                                setAgregar({
                                    evento: {
                                        ...agregar.evento,
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
                            onChange={(event) =>
                                setAgregar({
                                    evento: {
                                        ...agregar.evento,
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
                            onChange={(event) =>
                                setAgregar({
                                    evento: {
                                        ...agregar.evento,
                                        fechaInicio: event.target.value,
                                    },
                                })
                            }
                            min={fechaHoy}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-black">Fecha de finalización</label>
                        <br />
                        <input
                            type="date"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    evento: {
                                        ...agregar.evento,
                                        fechaFinal: event.target.value,
                                    },
                                })
                            }
                            min={agregar.fechaInicio || fechaHoy}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-black">Precio</label>
                        <input
                            type="number"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    evento: {
                                        ...agregar.evento,
                                        precio: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    {tipos ? (
                        <div className="form-group">
                            <label className="text-black">Tipo</label>
                            <select
                                value={agregar.evento?.tipo}
                                className="form-control"
                                name="tipo"
                                onChange={(event) =>
                                    setAgregar({
                                        evento: {
                                            ...agregar.evento,
                                            tipo: event.target.value,
                                        },
                                    })
                                }
                                style={{height:"6vh",overflow: "scroll", fontSize: "13px", fontWeight: "bold" }}
                            >
                                {tipos.map((h) => (
                                    <option key={h._id} value={h._id}
                                    >
                                        {h.tipo}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <div className="form-group">
                            <label className="text-black">Tipo</label>
                            <input
                                type="text"
                                className="form-control"
                                name="hotel"
                                onChange={(event) =>
                                    setAgregar({
                                        evento: {
                                            ...agregar.evento,
                                            tipo: event.target.value,
                                        },
                                    })
                                }
                            ></input>
                        </div>
                    )}
                    <div className="form-group">
                        <label className="text-black">Imagen</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    evento: {
                                        ...agregar.evento,
                                        img: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    {hotel ? (
                        <div className="form-group">
                            <label className="text-black">Hotel</label>
                            <select
                                value={agregar.evento?.hotel}
                                className="form-control"
                                name="hotel"
                                onChange={(event) =>
                                    setAgregar({
                                        evento: {
                                            ...agregar.evento,
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
                                        evento: {
                                            ...agregar.evento,
                                            hotel: event.target.value,
                                        },
                                    })
                                }
                            ></input>
                        </div>
                    )}

                    <div className="container text-center">
                        <button id='btn-enviar' type="submit" className="btn">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
            <br />
            <br />
            <Footer></Footer>
        </>
    )
}
