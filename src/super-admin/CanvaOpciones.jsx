import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export const CanvaOpciones = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Opciones de administrador</button>

            <div className="offcanvas offcanvas-start text-bg-dark" data-bs-scroll="true"  id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Lista de entidades</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Acá se encuentran las distintas entidades que puedes manipular como administrador.</p>
                    <ul className="nav-item">
                        <a
                            className="nav-link active"
                            href="/listaServiciosAdmin"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate("/listaServiciosAdmin");
                            }}
                        >
                            Servicios
                        </a>

                    </ul>
                    <ul className="nav-item">
                        <a
                            className="nav-link active"
                            href="/listaEventosAdmin"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate("/listaEventosAdmin");
                            }}
                        >
                            Eventos
                        </a>
                    </ul>

                    <ul className="nav-item">
                        <a
                            className="nav-link active"
                            href="/listaUsuariosAdmin"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate("/listaUsuariosAdmin");
                            }}
                        >
                            Usuarios
                        </a>
                    </ul>       
                    <ul className="nav-item">
                        <a
                            className="nav-link active"
                            href="/listaUsuariosAdmin"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate("/listaHotelesAdmin");
                            }}
                        >
                            Hoteles
                        </a>
                    </ul>                 
                </div>
            </div>
            <br />
            <br />
        </>
    )
}
