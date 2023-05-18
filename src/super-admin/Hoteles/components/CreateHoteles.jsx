import React, { useState } from 'react';
import { sendData } from '../helpers/formHotelHelper';
import { NavBar } from '../../Navbar-SuperAdmin';
import { Footer } from '../../../Principal/components/Footer';
import { hotel } from '../models/hotel';

export const CreateHoteles = () => {
    const [agregar, setAgregar] = useState(hotel);
    console.log(agregar)
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1 );
    };

    return (
        <>
        <NavBar></NavBar>
        <br />
            <div className='container'>
                <h1 id='create-evento'>Agregar Hotel</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="text-black">Nombre del hotel</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            onChange={(event) =>
                                setAgregar({
                                    hotel: {
                                        ...agregar.hotel,
                                        nombre: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Pais</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    hotel: {
                                        ...agregar.hotel,
                                        pais: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="text-black">Direccion</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    hotel: {
                                        ...agregar.hotel,
                                        direccion: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-black">Latitud</label>
                        <input
                            type="number"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    hotel: {
                                        ...agregar.hotel,
                                        latitud: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-black">Longitud</label>
                        <input
                            type="number"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    hotel: {
                                        ...agregar.hotel,
                                        longitud: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-black">Imagen</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    hotel: {
                                        ...agregar.hotel,
                                        img: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-black">Administrador</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    hotel: {
                                        ...agregar.hotel,
                                        administrador: event.target.value,
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
            <br />
            <Footer></Footer>
        </>
    )
}
