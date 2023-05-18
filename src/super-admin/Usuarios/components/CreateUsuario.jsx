import React, { useState } from 'react';
import { sendData } from '../helpers/formUsuarioHelper';
import { NavBar } from '../../Navbar-SuperAdmin';
import { Footer } from '../../../Principal/components/Footer';
import { usuario } from '../models/usuario';

export const CreateUsuario = () => {
    const [agregar, setAgregar] = useState(usuario);
    console.log(agregar)
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1, 0);
    };

    return (
        <>
        <NavBar></NavBar>
            <div className='container'>
                <h1 id='create-evento'>Crear Usuario</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="text-black">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        nombre: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Correo</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        correo: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="text-black">Password</label>
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        password: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-black">Identificacion</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        identificacion: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-black">Edad</label>
                        <input
                            type="number"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        edad: event.target.value,
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
                                    usuario: {
                                        ...agregar.usuario,
                                        img: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-black">Rol</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        rol: event.target.value,
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
            <br />
            <Footer></Footer>
        </>
    )
}
