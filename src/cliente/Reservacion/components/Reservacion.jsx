import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiReservacion } from "../api/apiReservacion";

export const Reservacion = () => {
  const [reservacion, setReservacion] = useState([]);
  console.log(reservacion);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const viewReservacion = async () => {
    const getListaHabitacionesFromApi = await apiReservacion();
    setReservacion(getListaHabitacionesFromApi);
  };

  useEffect(() => {
    viewReservacion();
  }, [showModal]);

  let reservas = [];
  console.log(reservas);
  if (reservacion.habitaciones && reservacion.habitaciones.length > 0) {
  for (let i = 0; i < reservacion.habitaciones.length; i++) {
    reservas.push(
      <div key={i} className="card-body p-4">
        <div className="card shadow-0 border mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-md-2">
                <img
                  src={reservacion.habitaciones[i].img}
                  className="img-fluid"
                  alt="Phone"
                />
              </div>
              <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                <p className="text-muted mb-0 small">
                  Tipo: {reservacion.habitaciones[i].tipo}
                </p>
              </div>
              <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                <p className="text-muted mb-0 small">
                  Numero: {reservacion.habitaciones[i].numero}
                </p>
              </div>
              <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                <p className="text-muted mb-0 small">
                  Costo: {reservacion.habitaciones[i].costo}
                </p>
              </div>
              <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                <p className="text-muted mb-0 small">
                  Dias: {reservacion.dias_habitaciones}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-10 col-xl-8">
            <div className="card" style={{ borderRadius: "10px" }}>
              <div className="card-header px-4 py-5">
                <h5 className="text-muted mb-0">
                  Thanks for your Order, {""}
                  <span style={{ color: "#a8729a" }}>{"Juan"}</span>!
                </h5>
              </div>
              {reservacion.map((item, index) => (
                <div key={index} className="card-body p-4">
                  <div className="card shadow-0 border mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p className="card-text">
                            Fecha inicio: {item.fechaInicio}
                          </p>
                          <p className="card-text">
                            Fecha final: {item.fechaFinal}
                          </p>
                          <p className="card-text">
                            Cantidad de personas: {item.cantidadPersonas}
                          </p>
                        </div>
                        <div className="card shadow-0 border mb-4">
                          <div className="card shadow-0 border mb-4">
                            <div className="card-body">
                              <div className="row">
                               {reservas}
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-2">
                                <img
                                  src={item.eventos[index].img}
                                  className="img-fluid"
                                  alt="Phone"
                                />
                              </div>
                              <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                <p className="text-muted mb-0">iPad</p>
                              </div>
                              <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                <p className="text-muted mb-0 small">
                                  Pink rose
                                </p>
                              </div>
                              <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                <p className="text-muted mb-0 small">
                                  Capacity: 32GB
                                </p>
                              </div>
                              <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                <p className="text-muted mb-0 small">Qty: 1</p>
                              </div>
                              <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                <p className="text-muted mb-0 small">$399</p>
                              </div>
                            </div>
                            <hr
                              className="mb-4"
                              style={{
                                backgroundColor: "#e0e0e0",
                                opacity: "1",
                              }}
                            />
                            <div className="row d-flex align-items-center">
                              <div className="col-md-2">
                                <p className="text-muted mb-0 small">
                                  Track Order
                                </p>
                              </div>
                              <div className="col-md-10">
                                <div
                                  className="progress"
                                  style={{
                                    height: "6px",
                                    borderRadius: "16px",
                                  }}
                                >
                                </div>
                                <div className="d-flex justify-content-around mb-1">
                                  <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                    Out for delivary
                                  </p>
                                  <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                    Delivered
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="card-footer border-0 px-4 py-5"
                            style={{
                              backgroundColor: "#a8729a",
                              borderBottomLeftRadius: "10px",
                              borderBottomRightRadius: "10px",
                            }}
                          >
                            <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                              Total paid:{" "}
                              <span className="h2 mb-0 ms-2">{item.total}</span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
