import React from 'react';
import { Modal } from "react-bootstrap";
import { FormUsuario } from './FormUsuario';

export const UpdateUsuario = ({ isOpen, onClose, usuarioEdit }) => {
    console.log(usuarioEdit)
    if (!isOpen) {
        return null;
    }
    return (
        <>
            <>
                <Modal show={isOpen}>
                    <Modal.Header>
                        <Modal.Title className="text-dark">ID: {usuarioEdit._id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormUsuario
                            usuario={usuarioEdit}
                            id={usuarioEdit._id}
                            option={2}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" onClick={onClose}>
                            Cerrar
                        </button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
    )
}
