import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';

import { Footer } from '../../Principal/components/Footer';

import { NavBar } from '../../Principal/components/NavBar';
import { apiRegistro } from '../api/apiRegistro';
import { usuario } from '../models/usuario';
import { sendData } from '../helpers/registroHelper';

export const Registro = () => {
    const [agregar, setAgregar] = useState(usuario)
    // const [nombre, setNombre] = useState([]);
    // const [edad, setEdad] = useState([]);
    // const [identificacion, setIdentificacion] = useState([]);
    // const [correo, setCorreo] = useState([]);
    // const [password, setPassword] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1, 0);
        // Llamar a la función enviarDatos() y pasar el estado actual como argumento
    };

    return (
        <>
            <NavBar></NavBar>
            <MDBContainer fluid>
                <MDBRow>

                    <MDBCol sm='6'>

                        <div className='d-flex flex-row ps-5 pt-5'>
                            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
                            <span className="h1 fw-bold mb-0">HotelSelecto</span>
                        </div>

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Registrate</h3>

                            <form onSubmit={handleSubmit}>
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Nombre completo' type='text' size="lg"
                                    onChange={(event) =>
                                        setAgregar({
                                            usuario: {
                                                ...agregar.usuario,
                                                nombre: event.target.value,
                                            },
                                        })
                                    }
                                />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Edad' type='number' size="lg"
                                    onChange={(event) =>
                                        setAgregar({
                                            usuario: {
                                                ...agregar.usuario,
                                                edad: event.target.value,
                                            },
                                        })
                                    }
                                />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='No. Identificacion' type='number' size="lg"
                                    onChange={(event) =>
                                        setAgregar({
                                            usuario: {
                                                ...agregar.usuario,
                                                identificacion: event.target.value,
                                            },
                                        })
                                    }
                                />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Correo Electronico' type='email' size="lg"
                                    onChange={(event) =>
                                        setAgregar({
                                            usuario: {
                                                ...agregar.usuario,
                                                correo: event.target.value,
                                            },
                                        })
                                    }
                                />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Password' type='password' size="lg"
                                    onChange={(event) =>
                                        setAgregar({
                                            usuario: {
                                                ...agregar.usuario,
                                                password: event.target.value,
                                            },
                                        })
                                    }
                                />

                                <button type="submit" className="mb-4 px-5 mx-5 w-100"

                                    color="info"

                                    size="lg">
                                    Registro
                                </button>
                            </form>
                        </div>
                    </MDBCol>

                    <MDBCol sm='6' className='d-none d-sm-block px-0'>
                        <img id='img-registro' src="https://inmobiliare.com/himalaya/wp-content/uploads/2020/05/the_link_007-1024x1024.png"
                            alt="Login image" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                    </MDBCol>

                </MDBRow>

            </MDBContainer>
            <Footer></Footer>
        </>

    );
}
