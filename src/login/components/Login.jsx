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
      console.log(result.split('.'));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Ha iniciado sesión con exito!",
        confirmButtonText: "Ok",
      }).then((r) => {
        if (result) {
          if (r.isConfirmed) {
            const [header, payload, signature] = result.split('.');
            const decodedPayload = JSON.parse(atob(payload));
            console.log(decodedPayload)
            const rolUsuario = decodedPayload.rol;
            console.log(rolUsuario);
          if (rolUsuario == "ROL_SUPERADMIN") {
            window.location.href = "/listaHabitacionesAdmin";
          } else if (rolUsuario == "ROL_ADMINISTRADOR") {
            window.location.href = "/hoteles";
          } else {
            window.location.href = "/hoteles";
          }
        }
      }
      });
    }
  };

  return (
    <>
    <div id="contenedor" className="bgLogin raleway">
    <div id="central">
        <div id="login">
            <div className="titulo">
                Bienvenido
            </div>
    <form className="formLogin" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="correo" className="form-label text-white">
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
        <label htmlFor="password" className="form-label text-white">
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
