import React, { useState } from "react";
import Swal from "sweetalert2";
import { apiLogin } from "../api/apiLogin";
import * as yup from "yup";

export const Login = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await loginSchema.validate({ correo, password }, { abortEarly: false });

      const result = await apiLogin(correo, password);
      if (result) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Ha iniciado sesión con éxito!",
          confirmButtonText: "Ok",
        }).then((r) => {
          if (result) {
            if (r.isConfirmed) {
              const [header, payload, signature] = result.split(".");
              const decodedPayload = JSON.parse(atob(payload));
              const rolUsuario = decodedPayload.rol;
              if (rolUsuario === "ROL_SUPERADMIN") {
                window.location.href = "/principalSuperAdmin";
              } else if (rolUsuario === "ROL_ADMINISTRATIVO") {
                window.location.href = "/principalAdmin";
              } else {
                window.location.href = "/hoteles";
              }
            }
          }
        });
      }
    } catch (error) {
      let mensaje = "Por favor, complete todos los campos.";

      if (error.name === "ValidationError") {
        mensaje = error.errors[0];
      }

      Swal.fire({
        icon: "error",
        title: "Error",
        text: mensaje,
      });
    }
  };

  const loginSchema = yup.object().shape({
    correo: yup
      .string()
      .email("Ingrese un correo electrónico válido.")
      .required("Ingrese su correo electrónico."),
    password: yup.string().required("Ingrese su contraseña."),
  });

  return (
    <>
      <div id="contenedor" className="bgLogin raleway">
        <div id="central">
          <div id="login">
            <div className="titulo">Bienvenido</div>
            <form className="formLogin" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label text-white">
                  Correo electrónico:
                </label>
                <input
                  type="email"
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