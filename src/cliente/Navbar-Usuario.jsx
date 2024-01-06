import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img from '../img/logoBlanco.png';
import { Avatar, AvatarIcon, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { apiUsuarioById } from "./Usuario/api/apiUsuarios";

var tokenId = localStorage.getItem("token");

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});
  console.log("URL de la imagen:", usuario?.img);

  const handleLogout = async () => {
    localStorage.clear();
    navigate('/login');
  }

  const fetchUser = async () => {
    const getCliente = await apiUsuarioById(tokenId);
    setUsuario(getCliente);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <header>
        <div>
          <Navbar
            className="navbar navbar-expand-lg bg-body-tertiary navbarNextUi"
          >
            <div className="navbar-brand">
              <img src={img} alt="" width="65" height="55" className="imgNavbar"
                onClick={() => {
                  navigate("/hoteles")
                }} />
            </div>
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
              <div className="container-fluid ">
                <div className="nav-item">
                  <NavbarContent as="div" justify="end" className="mb-5">
                    <Dropdown placement="bottom-end" responsive >
                      <DropdownTrigger>
                        <NavbarItem
                          style={{ width: "auto", height: "100%" }}
                          className="mt-5"
                        > {usuario?.img ? (<img src={usuario?.img}
                          alt={usuario.nombre}
                          className="dropdown-toggle rounded-circle transition-transform img-fluid imgNavbarUI mt-1 "
                          style={{ width: "50px", height: "50px" }} />
                        ):(
                          <p style={{color: "white"}}>Cargando</p>
                        )}</NavbarItem>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Profile Actions" className="dropNavbar" variant="flat">
                        <DropdownItem key="profile" className="h-15 gap-2 disable" color="secondary"
                         onClick={(event) => {
                          event.preventDefault();
                          navigate("/hoteles");
                        }}>
                          <p className="font-semibold">{usuario?.nombre}</p>
                        </DropdownItem>
                        <DropdownItem key="settings" color="primary"
                          onClick={(event) => {
                            event.preventDefault();
                            navigate("/miPerfil");
                          }}>Mi Perfil</DropdownItem>
                        <DropdownItem key="team_settings" color="success"
                          onClick={(event) => {
                            event.preventDefault();
                            navigate("/reservacion");
                          }}>Mi Reservacion</DropdownItem>
                        <DropdownItem key="logout" color="danger" onClick={() => {
                          handleLogout();
                        }}>
                          Cerrar Sesion
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavbarContent>
                </div>
              </div>
            </div>
          </Navbar>
        </div>
      </header>
      <br />
    </>
  );
};
