import React from "react";
import { FormProfile } from "./FormProfile";
import { Modal } from "react-bootstrap";
export const UpdateProfile = ({ isOpen, onClose, profileEdit }) => {

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <>
        <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {profileEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormProfile
              profile={profileEdit}
              id={profileEdit._id}
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