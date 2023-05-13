import React from 'react';
import { FormEvento } from "./FormEvento";
import { Modal } from "react-bootstrap";

export const UpdateEvento = ({ isOpen, onClose, eventoEdit }) => {
    console.log(eventoEdit)
    if (!isOpen) {
        return null;
    }
    return (
        <>
            <>
                <Modal show={isOpen}>
                    <Modal.Header>
                        <Modal.Title className="text-dark">ID: {eventoEdit._id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormEvento
                            evento={eventoEdit}
                            id={eventoEdit._id}
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
