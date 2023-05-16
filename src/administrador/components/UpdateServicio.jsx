import React from "react";
import { FormServicio } from "./FormServicio";
import { Modal } from "react-bootstrap";

export const UpdateServicio= ({ isOpen, onClose, servicioEdit }) => {
    console.log(servicioEdit);
    if (!isOpen) {
        return null;
    }

    return (
        <>
            <>
                <Modal show={isOpen}>
                    <Modal.Header>
                        <Modal.Title className="text-dark">ID: {servicioEdit._id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormServicio
                            servicio={servicioEdit}
                            id={servicioEdit._id}
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
    );
};