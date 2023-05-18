import React from "react";
import { useNavigate } from "react-router-dom";

export const Principal = () => {
  const navigate = useNavigate();

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="row">
        <div className="col-md-6">
          <div className="card text-center" style={{ borderRadius: "30px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.60)", height: "600px", width: "400px" }}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title" style={{ marginBottom: "20px", fontSize: "40px" }}>Administrador</h5>
              <button
                className="btn btn-primary"
                style={{ fontSize: "30px", backgroundColor: "#002855", borderRadius: "20px" ,paddingLeft: "80px", paddingRight: "80px" }}
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/listaHabitacionesAdmin");
                }}
              >
                Ir
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center" style={{ borderRadius: "30px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.60)", height: "600px", width: "400px" }}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title" style={{ marginBottom: "20px", fontSize: "40px" }}>Cliente</h5>
              <button
                className="btn btn-primary "
                style={{ fontSize: "30px", backgroundColor: "#002855", borderRadius: "20px", paddingLeft: "80px", paddingRight: "80px" }}
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/hoteles");
                }}
              >
                Ir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
