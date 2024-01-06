import React from 'react';
import img from "../../img/logoBlanco.png";
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="footer py-5 d-flex" style={{backgroundColor: "#1b3641"}}>
            <div className="container footerContainer">
                <div className="row">
                    <div className='col-lg-1'></div>
                    <div className="col-lg-4 col-md-4 logoFooter">
                        <div className="d-flex align-items-end mb-4 ms-md-0 ms-4">
                            <img src={img} alt="Gestor Hoteles" height={140} width={120} />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-4">
                        <h4 className="mb-4 text-white ms-4">Redes Sociales</h4>
                        <ul className="list-unstyled d-flex gap-3 mb-0 mx-4">
                            <li>
                                <a target="_blank">
                                    <FaInstagram  id='iconIg' size={24} color="#E1306C" /></a></li>
                            <li>
                                <a target="_blank">
                                    <FaFacebook id='iconFace' size={24} color="#1877F2" /></a></li>
                            <li>
                                <a target="_blank">
                                    <FaLinkedin id='iconLink' size={24} color="#0a66c2" /></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 ">
                        <h4 className="mb-4 text-white contactanos">Contáctanos</h4>
                        <p className="mb-2"><i className="fa fa-phone me-3 text-primary"></i>(502) 2324-2890</p>
                        <p><i className="fa fa-envelope-o me-3 text-primary"></i>info@hotelSelecto.com</p>
                    </div>
                </div>
                <hr className="my-4 lineaSeparador" />
                <div className="row textoDerechos">
                    <div className="col text-center position:absolute">
                        <p className="mb-0 text-white"><small>&copy; {new Date().getFullYear()} Gestor Hoteles. Todos los derechos reservados.</small></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
