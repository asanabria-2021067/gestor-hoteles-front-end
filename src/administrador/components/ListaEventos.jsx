
import React, { useEffect, useState } from 'react';
import { apiEventos } from '../api/apiEventos';

export const ListaEventos = () => {
    const [listaEventosAdmin, setListaEventosAdmin] = useState([]);
    console.log(listaEventosAdmin);
    const [showModal, setShowModal] = useState(false);

    const viewEventosList = async () => {
        const getListEventosFromApi = await apiEventos();
        setListaEventosAdmin(getListEventosFromApi);
    };

    useEffect(() => {
        viewEventosList();
    }, [showModal]);


    return (
        <>
            <div className="container">
                <h2>Lista de eventos</h2>
                <table className="table">
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha Inicio</th>
                            <th scope="col">Fecha Fin</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaEventosAdmin.map((e) => {
                            return (

                                <tr key={e._id}>
                                    <th scope="row">{e._id}</th>

                                    <td>{e.nombre}</td>
                                    <td>{e.fechaInicio}</td>
                                    <td>{e.fechaFinal}</td>
                                    <td>{e.precio}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
