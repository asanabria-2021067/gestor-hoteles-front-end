import React, { useRef } from "react";
import imagen from "../../img/hotel1.jpg";
import imagen2 from "../../img/hotel3.jpg";

import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'
export const Contactanos = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current.user_name.value);

    if(form.current.user_name.value && form.current.user_email.value && form.current.message.value){
    emailjs.sendForm('service_gp783xq', 'template_pwxa6hs', form.current, 'T7sZggiRYwSN5_JmW')
      .then((result) => {
          toast.success("Se envio su mensaje");
          form.current.user_name.value = "";
          form.current.user_email.value= "";
          form.current.message.value = ""
      }, (error) => {
          toast.error("No se logro enviar su mensaje");
      });
    }else{
      toast.error("Llene todos los datos del formulario");
    }
  };
  return (
    <>
      <section
        className="contact_section layout_padding"
      >
        <Toaster richColors position="bottom-right" expand={false}  />
        <div
          className="heading_container d-flex align-items-center justify-content-center mb-2"
          id="contacto"
        >
         <h1 style={{color: 'black', fontSize: "40px", fontWeight: "bold", 
         textAlign: "center"}}>Contactanos</h1>
        </div>
        <p style={{textAlign: "center", fontSize: "15px"}}>Si tienes dudas o requieres más información.</p> 
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-7" id="containerContacto">
              <form className="formPrincipal " ref={form} onSubmit={sendEmail}>
                <div className="ms-auto me-auto">
                  <input
                    className="inputPrincipal"
                    type="text"
                    placeholder="Nombre"
                    name="user_name"
                    style={{ backgroundColor: "#fff" }}
                  />
                </div>
                <div>
                  <input
                    className="inputPrincipal"
                    type="email"
                    placeholder="Correo"
                    name="user_email"
                    style={{ backgroundColor: "#fff" }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box inputPrincipal"
                    rows="3" cols="20" placeholder="Escribe aqui tu mensaje"
                    name="message"
                    style={{ backgroundColor: "#fff"}}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <button id="btnOpciones">
                    <i className="fa fa-send mx-2"></i>Enviar
                  </button>
                </div>
              </form>
              <div className="social-icons mt-4 d-flex align-items-center justify-content-center">
            <div className="row mx-4">
              <a className="facebook-icon mx-4" onClick={() => toast.info('No activo')} style={{color: "white", width:"30vh"}}>
                <strong className="mx-2"><i className="fa fa-facebook me-2"></i>Facebook</strong>
              </a>
              <a className="whatsapp-icon mx-4" onClick={() => toast.info('No activo')} style={{color: "white", width:"30vh"}}>
              <strong className="mx-2 mt-4"><i className="fa fa-whatsapp me-2"></i>Whatsapp</strong>
              </a>
            </div>
          </div>
            </div>
            <div className="col-md-5 mt-4">
              <img
                id="imagenContacto"
                src={imagen}
                alt=""
                width={350}
                height={400}
              />
               <img
               className="mt-2"
                id="imagenContacto"
                src={imagen2}
                alt=""
                width={350}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
