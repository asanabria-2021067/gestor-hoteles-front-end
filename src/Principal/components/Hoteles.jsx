import React, { useEffect, useState } from 'react'
import { apiHoteles } from '../../cliente/Principal/api/apiHoteles';
import { useParams } from 'react-router-dom';

export const Hoteles = () => {
    const [listaHoteles, setListaHoteles] = useState([]);
    console.log(listaHoteles);
    const [showModal, setShowModal] = useState(false);
    
    const viewHotelesList = async () => {
        const getListaHotelesList = await apiHoteles();
        setListaHoteles(getListaHotelesList);
    };

    useEffect(() => {
        viewHotelesList();
    }, [showModal]);

    return (
        <>
            <div className='container'>
                <h1>Lista de Hoteles:</h1>
                {listaHoteles.map((h) => {
                    return (
                        <div className="card bg-dark text-white" key={h._id}>
                            <img src="./src/assets/de-viaje.png" className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">{h.nombre}</h5>
                                <p className="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                                <p className="card-text">Última actualización hace 3 minutos</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
