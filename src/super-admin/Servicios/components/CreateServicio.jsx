import React, { useEffect, useState } from 'react'
import { sendData } from '../helpers/formServicioHelper';
import { servicio } from '../models/servicio';
import { NavBar } from '../../Navbar-SuperAdmin';
import { Footer } from '../../../Principal/components/Footer';
import { apiHotelesGrupal } from '../../../cliente/Principal/api/apiHoteles';

export const CreateServicio = () => {
    const [agregar, setAgregar] = useState(servicio);
    const [hotel, setHotel] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1, 0);
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
        <NavBar></NavBar>
        <br />
            <div className='container'>
                <h1 style={{color: 'black', fontSize: "40px", fontWeight: "bold", textAlign: "center"}}>Crear Servicio</h1>
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
                    {hotel ? (
                        <div className="form-group">
                            <label className="text-black">Hotel</label>
                            <select
                                value={agregar.servicio?.hotel}
                                className="form-control"
                                name="hotel"
                                onChange={(event) =>
                                    setAgregar({
                                        servicio: {
                                            ...agregar.servicio,
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
                                        servicio: {
                                            ...agregar.servicio,
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
            <Footer></Footer>
        </>
    )
}
