import React, { useEffect, useState } from 'react';
import { apiServicio } from '../api/apiServicio';

export const ListaServicio = () => {
    const [listaServicios, setListaServicios] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const viewServiciosList = async () => {
        const getListServicioFromApi = await apiServicio();
        setListaServicios(getListServicioFromApi);
    };

    useEffect(() => {
        viewServiciosList();
    }, [showModal]);

    return (
        <>
            <div className="container">
                <h2>Lista de servicios</h2>
                <table className="table">
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Descripcion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaServicios.map((s) => {
                            return (

                                <tr key={s._id}>
                                    <th scope="row">{s._id}</th>

                                    <td>{s.nombre}</td>
                                    <td>{s.precio}</td>
                                    <td>{s.descripcion}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
