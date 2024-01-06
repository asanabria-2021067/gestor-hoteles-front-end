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
            className="navbar navbar-expand-lg bg-body-tertiary navbarNextUi pb-2 pt-2"
            id="navbarColor"

          >
            <div className="container">
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
                  <li className="nav-item  me-auto ms-auto ">
                  <a
                      className="nav-link active"
                      href="/principalSuperAdmin"
                      style={{color: "white"}}
                      onClick={(event) => {
                        event.preventDefault();
                        navigate("/principalSuperAdmin");
                      }}
                    >
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item  me-auto ms-auto ">
                    <a className="nav-link active"  
                    href="/miPerfilSuperAdmin"
                    style={{color: "white"}}
                      onClick={(event) => {
                        event.preventDefault();
                        navigate("/miPerfilSuperAdmin");
                      }}>Mi Perfil</a>
                  </li>
                  <li className="cerrarSesion me-auto ms-auto ">
                    <a
                      className="nav-link active"
                      href="/"
                      style={{color: "white"}}
                      onClick={(event) => {
                        event.preventDefault();
                        localStorage.clear();
                        navigate("/");
                      }}
                    >
                      <i className="fa fa-download mx-2"></i>Cerrar Sesion
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
