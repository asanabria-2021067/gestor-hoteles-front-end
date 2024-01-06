import React, { useState } from "react";
import { sendData } from "../helpers/formHotelHelper";

export const FormHotel = (hotelEdit, option, id) => {
    console.log(hotelEdit);
    const [state, setState] = useState(hotelEdit);

    console.log(state);
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(state, 2, id);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-black">Nombre de Hotel</label>
                    <input
                        className="form-control"
                        maxLength={22}
                        value={state.hotel.nombre}
                        onChange={(event) =>
                            setState({
                                hotel: {
                                    ...state.hotel,
                                    nombre: event.target.value,
                                },
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label className="text-black">Pais</label>
                    <input
                        className="form-control"
                        value={state.hotel.pais}
                        onChange={(event) =>
                            setState({
                                hotel: {
                                    ...state.hotel,
                                    pais: event.target.value,
                                },
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label className="text-black">Direccion</label>
                    <input
                        className="form-control"
                        value={state.hotel.direccion}
                        onChange={(event) =>
                            setState({
                                hotel: {
                                    ...state.hotel,
                                    direccion: event.target.value,
                                },
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label className="text-black">Latitud</label>
                    <input
                        type="number"
                        className="form-control"
                        value={state.hotel.latitud}
                        onChange={(event) =>
                            setState({
                                hotel: {
                                    ...state.hotel,
                                    latitud: event.target.value,
                                },
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label className="text-black">Longitud</label>
                    <input
                        type="number"
                        className="form-control"
                        value={state.hotel.longitud}
                        onChange={(event) =>
                            setState({
                                hotel: {
                                    ...state.hotel,
                                    longitud: event.target.value,
                                },
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label className="text-black">Imagen</label>
                    <input
                        className="form-control"
                        value={state.hotel.img}
                        onChange={(event) =>
                            setState({
                                hotel: {
                                    ...state.hotel,
                                    img: event.target.value,
                                },
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label className="text-black">Administrador</label>
                    <input
                        className="form-control"
                        value={state.hotel.administrador._id}
                        onChange={(event) =>
                            setState({
                                hotel: {
                                    ...state.hotel,
                                    administrador: event.target.value,
                                },
                            })
                        }
                    />
                </div>
                <div className="container text-center">
                    <button id="btn-enviar" type="submit" className="btn">
                        Enviar
                    </button>
                </div>
            </form>
        </>
    )
}
