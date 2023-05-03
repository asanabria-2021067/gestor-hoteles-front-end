import React, { useState } from "react";
import Swal from "sweetalert2";
import { apiLogin } from "../api/apiLogin";

export const Login = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await apiLogin(correo, password);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Ha iniciado sesión con exito!",
        confirmButtonText: "Ok",
      }).then((r) => {
        if (result) {
          window.location.href = "/hoteles";
        } else {
          window.location.href = "/";
        }
      });
    }
  };

  return (
    <>
    <div id="contenedor">
    <div id="central">
        <div id="login">
            <div class="titulo">
                Bienvenido
            </div>
    <form className="formLogin" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="correo" className="form-label text-black">
          Correo electrónico:
        </label>
        <input
          type="correo"
          className="form-control"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label text-black">
          Contraseña:
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Iniciar sesión
      </button>
    </form>
    </div>
    </div>
    </div>
    </>
  );
};
