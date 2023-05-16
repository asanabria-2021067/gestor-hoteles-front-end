import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
                    src="src/img/de-viaje.png"
                    alt="HotelSelecto"
                    width="30"
                    height="24"
                  />
                </a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <a
                      className="nav-link active"
                      href="/"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate("/");
                      }}
                    >
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="/hotelesVista"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate("/hotelesVista");
                      }}
                    >
                      Hoteles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active">Ofertas</a>
                  </li>
                  <li className="inicioSesion">
                    <a
                      className="nav-link active"
                      href="/login"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate("/login");
                      }}
                    >
                      Iniciar Sesion
                    </a>
                  </li>
                  <li className="registro">
                    <a className="nav-link active">Registrarse</a>
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
