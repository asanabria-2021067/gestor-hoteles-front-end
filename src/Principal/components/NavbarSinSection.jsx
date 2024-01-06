import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../../img/logoBlanco.png";
import { Button } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { apiUsuarioById } from "../../cliente/Usuario/api/apiUsuarios";
import Swal from "sweetalert2";

export const NavBarSinSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(searchQuery.length);
    if (searchQuery.length <= 3) {
      Swal.fire({
        icon: "warning",
        title: "Campo vacío",
        text: "Por favor, ingresa un término de búsqueda mayor a 3 caractéres.",
      });
    }else{
    navigate(`/hotelesBuscador/${searchQuery}`);
  }
}

  return (
    <>
      <header>
        <div>
        <nav
            className="navbar navbar-expand-lg"
            id="navbarColor"
            data-bs-theme="dark"
            style={{backgroundColor: "#1b3641"}}
          >
            <div className="container container-fluid">
              <a className="navbar-brand" href="/">
                <img src={img} alt="HotelSelecto" width="60" height="50" />
              </a>
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
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active mx-2"
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
                      className="nav-link active mx-2"
                      href="/hotelesVista"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate("/hotelesVista");
                      }}
                    >
                      Hoteles
                    </a>
                  </li>

                  <div className="ms-1 container-fluid" id="buscador">
                    <form
                      className="d-flex"
                      role="search"
                      onSubmit={handleSearch}
                    >
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Busca por hotel o país"
                        aria-label="Search"
                        style={{backgroundColor: "white", color: "black", textAlign:"center"}}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button className="btn btnBuscar2" type="submit">
                        <SearchIcon size={16} />
                      </button>
                    </form>
                  </div>
                </ul>

                <div className="flex flex-wrap gap-2 items-center mx-4 ms-4">
                  <Button
                    className="ov-btn-grow-ellipse"
                    href="/login"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/login");
                    }}
                  >
                    <i className="fa fa-send ms-0 mx-1"></i>Acceder
                  </Button>
                  <Button
                    className="ov-btn-grow-ellipse"
                    href="/registro"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/registro");
                    }}
                  >
                    <i className="fa fa-user ms-0 mx-1"></i>Registro
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <br />
    </>
  );
};
