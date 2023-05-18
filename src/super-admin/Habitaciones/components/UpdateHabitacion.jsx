import React from "react";
import { FormHabitacion } from "./FormHabitacion";
import { Modal } from "react-bootstrap";

export const UpdateHabitacion = ({ isOpen, onClose, habitacionEdit }) => {
  if (!isOpen) {
    return null;
  }
  console.log(habitacionEdit)
  return (
    <>
      <>
        <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {habitacionEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormHabitacion
              habitacion={habitacionEdit}
              id={habitacionEdit._id} // Asegúrate de que el valor de 'id' sea correcto
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