import React, { useState } from 'react';
import { evento } from '../models/evento';
import { Modal } from "react-bootstrap";
import { sendData } from '../helpers/formEventoHelper';

export const CreateEventos = () => {
    const [agregar, setAgregar] = useState(evento);

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1, 0);
    };

    return (
        <>
            <div className='container'>
                <h1 id='create-evento'>Crear evento</h1>
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
                    <div className="form-group">
                        <label className="text-black">Tipo</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    evento: {
                                        ...agregar.evento,
                                        tipo: event.target.value,
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
            </div>
        </>
    )
}
