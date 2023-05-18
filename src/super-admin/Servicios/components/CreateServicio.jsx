import React, { useState } from 'react'
import { sendData } from '../helpers/formServicioHelper';
import { servicio } from '../models/servicio';
import { NavBar } from '../../Navbar-SuperAdmin';
import { Footer } from '../../../Principal/components/Footer';

export const CreateServicio = () => {
    const [agregar, setAgregar] = useState(servicio);

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1, 0);
    };

    return (
        <>
        <NavBar></NavBar>
        <br />
            <div className='container'>
                <h1 id='create-evento'>Crear Servicio</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="text-black">Nombre de servicio</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            onChange={(event) =>
                                setAgregar({
                                    servicio: {
                                        ...agregar.servicio,
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
                                    servicio: {
                                        ...agregar.servicio,
                                        descripcion: event.target.value,
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
                                    servicio: {
                                        ...agregar.servicio,
                                        precio: event.target.value,
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
                            onChange={(event) =>
                                setAgregar({
                                    servicio: {
                                        ...agregar.servicio,
                                        img: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-black">Hotel</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    servicio: {
                                        ...agregar.servicio,
                                        hotel: event.target.value,
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
            <Footer></Footer>
        </>
    )
}
