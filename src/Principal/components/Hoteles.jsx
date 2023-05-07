import React, { useEffect, useState } from 'react'
import { apiHoteles, apiHotelesGrupal } from '../../cliente/Principal/api/apiHoteles';
import { useParams } from 'react-router-dom';

export const Hoteles = () => {
    const [listaHoteles, setListaHoteles] = useState([]);
    console.log(listaHoteles);
    const [showModal, setShowModal] = useState(false);
    
    const viewHotelesList = async () => {
        const getListaHotelesList = await apiHotelesGrupal();
        setListaHoteles(getListaHotelesList);
    };

    useEffect(() => {
        viewHotelesList();
    }, [showModal]);

    return (
        <>
            <div className='container'>
                <h1>Encuentra el mejor hotel para ti.</h1>
                <br />
                {listaHoteles.map((h) => {
                    return (
                        <div id='hotel-card' className="card bg-dark text-white" key={h._id}>
                            <img id='img-hotel' src={h.img} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">{h.nombre}</h5>
                                <p className="card-text">{h.pais}</p>
                                <p className="card-text">{h.direccion}</p>
                                <p className="card-text">Última actualización hace 3 minutos</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
