import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiHoteles } from "../../cliente/Principal/api/apiHoteles";
import img from '../../img/de-viaje.png';
export const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    e.preventDefault();
    navigate(`/hotelesBuscador/${searchQuery}`)
  }
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
                  <li className="inicioSesion2">
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
                  <li className="registro2">
                    <a className="nav-link active" href="/registro"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate("/registro");
                      }}>Registrarse</a>
                  </li>
                </ul>
                <form className="d-flex" role="search" onSubmit={handleSearch}>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <br />
    </>
  );
}
