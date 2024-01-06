import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import * as yup from "yup";
import Swal from "sweetalert2";
import { Footer } from "../../Principal/components/Footer";
import { usuario } from "../models/usuario";
import { sendData } from "../helpers/registroHelper";
import img from "../../img/logoNormal.png";
import { NavBarSinSection } from "../../Principal/components/NavbarSinSection";
import { uploadFiles } from "../../../firebase/config";
export const Registro = () => {
  const [agregar, setAgregar] = useState(usuario);
  const [file, setFile] = useState(null);
  console.log(file);
  console.log(agregar);


  const uploadImage = async (file2) => {
    if (file2) {
      const result = await uploadFiles(file2);
      if (result) {
        setAgregar({
          ...agregar,
          usuario: {
            ...agregar.usuario,
            img: result
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Se debe ingresar primero una imagen",
      });
    }
  }
}

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await registroSchema.validate(agregar, { abortEarly: false });
      await sendData(agregar, 1, 0);
    } catch (error) {
      let mensaje = "Por favor, complete todos los campos.";
      if (error.name === "ValidationError") {
        mensaje = error.errors.join("\n");
      }
      Swal.fire({
        icon: "error",
        title: "Error",
        text: mensaje,
      });
    }
  };

  const registroSchema = yup.object().shape({
    usuario: yup.object().shape({
      nombre: yup.string().required("Ingrese su nombre completo."),
      edad: yup.number().required("Ingrese su edad."),
      identificacion: yup
        .number()
        .required("Ingrese su número de identificación."),
      correo: yup
        .string()
        .email("Ingrese un correo electrónico válido.")
        .required("Ingrese su correo electrónico."),
      password: yup.string().required("Ingrese su contraseña."),
    }),
  });

  return (
    <>
      <NavBarSinSection></NavBarSinSection>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol sm="6">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img
                src={img}
                alt="..."
                style={{ width: "40%", height: "30%" }}
              />
              <h1 className="mb-4 ms-2" style={{
                fontSize: "45px", color: "#25587a", fontWeight: "bold", textAlign: "center",
                justifyContent: "center"
              }}>REGISTRO</h1>
            </div>

            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">


              <form onSubmit={handleSubmit}>
                <MDBInput
                  className="inputRegister"
                  wrapperClass="mb-4 mx-5 w-100"
                  placeholder="Nombre Completo"
                  type="text"
                  size="lg"
                  onChange={(event) =>
                    setAgregar({
                      usuario: {
                        ...agregar.usuario,
                        nombre: event.target.value,
                      },
                    })
                  }
                />
                <MDBInput
                  className="inputRegister"
                  wrapperClass="mb-4 mx-5 w-100"
                  placeholder="Edad"
                  type="number"
                  size="lg"
                  min={1}
                  max={100}
                  onChange={(event) =>
                    setAgregar({
                      usuario: {
                        ...agregar.usuario,
                        edad: event.target.value,
                      },
                    })
                  }
                />
                <MDBInput
                  className="inputRegister"
                  wrapperClass="mb-4 mx-5 w-100"
                  placeholder="Identificación"
                  type="number"
                  size="lg"
                  onChange={(event) =>
                    setAgregar({
                      usuario: {
                        ...agregar.usuario,
                        identificacion: event.target.value,
                      },
                    })
                  }
                />
                <MDBInput
                  className="inputRegister"
                  wrapperClass="mb-4 mx-5 w-100"
                  placeholder="Correo Electronico"
                  type="email"
                  size="lg"
                  onChange={(event) =>
                    setAgregar({
                      usuario: {
                        ...agregar.usuario,
                        correo: event.target.value,
                      },
                    })
                  }
                />
                <MDBInput
                  className="inputRegister"
                  wrapperClass="mb-4 mx-5 w-100"
                  placeholder="Password"
                  type="password"
                  size="lg"
                  onChange={(event) =>
                    setAgregar({
                      usuario: {
                        ...agregar.usuario,
                        password: event.target.value,
                      },
                    })
                  }
                />
                <MDBInput
                  className="inputRegister"
                  wrapperClass="mb-4 mx-5 w-100"
                  placeholder="Imagen"
                  type="file"
                  size="lg"
                  onChange={(e) => {
                    uploadImage(e.target.files[0]);
                  }}
                  accept=".png, .jpg, .jpeg"
                />
                <button
                  type="submit"
                  className="mb-4 px-5 mx-5 w-100"
                  id="btnOpciones"
                  color="info"
                  size="lg"
                >
                  <i className="fa fa-save mx-2"></i>Registrate
                </button>
              </form>
            </div>
          </MDBCol>

          <MDBCol sm="6" className="d-none d-sm-block px-0">
            <img
              id="img-registro"
              src="https://inmobiliare.com/himalaya/wp-content/uploads/2020/05/the_link_007-1024x1024.png"
              alt="Login image"
              className="w-100"
              style={{
                objectFit: "cover",
                objectPosition: "left",
                height: "100%",
                padding: "5vh"
              }}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer></Footer>
    </>
  );
};
