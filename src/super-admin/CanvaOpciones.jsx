import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export const CanvaOpciones = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <>
            <button className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="fa fa-lock mx-2"></i>Opciones de administrador</button>

            <div className="offcanvas offcanvas-start text-bg-dark" data-bs-scroll="true"  id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header d-flex align-items-center justify-content-center">
                    <h2 className="offcanvas-title" id="offcanvasWithBothOptionsLabel" style={{color: 'white', fontSize: "35px", fontWeight: "bold", textAlign: "center", textTransform: "uppercase"}}>Lista de entidades</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body mt-2 text-center">
                    <p className='mb-4'>Acá se encuentran las distintas entidades que puedes manipular como administrador.</p>
                    <ul className="nav-item mt-2">
                        <a
                            className="nav-link active opcionCanvas"
                            href="/listaServiciosAdmin"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate("/listaServiciosAdmin");
                            }}
                        >
                            <i className="fa fa-list mx-2"></i>Servicios
                        </a>

                    </ul>
                    <ul className="nav-item mt-2">
                        <a
                            className="nav-link active opcionCanvas"
                            href="/listaEventosAdmin"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate("/listaEventosAdmin");
                            }}
                        >
                            <i className="fa fa-democrat mx-2"></i>Eventos
                        </a>
                    </ul>

                    <ul className="nav-item mt-2">
                        <a
                            className="nav-link active opcionCanvas"
                            href="/listaUsuariosAdmin"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate("/listaUsuariosAdmin");
                            }}
                        >
                            <i className="fa fa-user mx-2"></i>Usuarios
                        </a>
                    </ul>       
                    <ul className="nav-item mt-2">
                        <a
                            className="nav-link active opcionCanvas"
                            href="/listaUsuariosAdmin"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate("/listaHotelesAdmin");
                            }}
                        >
                            <i className="fa fa-suitcase mx-2"></i>Hoteles
                        </a>
                    </ul>
                    <ul className="nav-item mt-2">
                        <a
                            className="nav-link active opcionCanvas"
                            href="/listaHabitacionesAdmin"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate("/listaHabitacionesAdmin");
                            }}
                        >
                            <i className="fa fa-hotel mx-2"></i>Habitaciones
                        </a>
                    </ul>                      
                </div>
            </div>
            <br />
            <br />
        </>
    )
}
