import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img from '../img/de-viaje.png';
export const NavBar = () => {
    const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div>
          <nav
            className="navbar navbar-expand-lg bg-body-tertiary"
            data-bs-theme="dark"
          >
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
              >
                <a className="navbar-brand" href="#">
                  <img
                    src={img}
                    alt="HotelSelecto"
                    width="30"
                    height="24"
                  />
                </a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <a
                      className="nav-link active"
                      href="/principalSuperAdmin"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate("/principalSuperAdmin");
                      }}
                    >
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active"  
                    href="/miPerfilSuperAdmin"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate("/miPerfilSuperAdmin");
                      }}>Mi Perfil</a>
                  </li>
                  <li className="inicioSesion2">
                    <a
                      className="nav-link active"
                      href="/"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate("/");
                      }}
                    >
                      Cerrar Sesion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <br />
    </>
  );
};
