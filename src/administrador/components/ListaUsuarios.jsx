import React, { useEffect, useState } from 'react';
import { apiUsuarios } from '../api/apiUsuarios';

export const ListaUsuarios = () => {
    const [listaUsuariosA, setListaUsuariosA] = useState([]);
    console.log(listaUsuariosA);
    const [showModal, setShowModal] = useState(false);

    const viewUsuariosList = async () => {
        const getListUsuariosFromApi = await apiUsuarios();
        setListaUsuariosA(getListUsuariosFromApi);
    };

    useEffect(() => {
        viewUsuariosList();
    }, [showModal]);

    return (
        <>
            <div className="container">
                <h2>Lista de usuarios</h2>
                <table className="table">
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Rol</th>
                            <th scope='col'>Identificacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaUsuariosA.map((u, index) => {
                            return (

                                <tr key={u._id}>
                                    <th scope="row">{u._id}</th>

                                    <td>{u.nombre}</td>
                                    <td>{u.correo}</td>
                                    <td>{u.rol}</td>
                                    <td>{u.identificacion}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
