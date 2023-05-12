import React, { useEffect, useState } from 'react';
import { DeleteServicio, apiServicio } from '../api/apiServicio'
import { NavBar } from '../../Principal/components/NavBar';
import { Footer } from '../../Principal/components/Footer';
import { CanvaOpciones } from './CanvaOpciones';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


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

    const eliminar = async (id) => {
        let result = await DeleteServicio(id);
        if (result) {
            setListaServicios(listaServicios.filter((u) => u._id !== id));
            Swal.fire({
                icon: "success",
                title: "Genial!",
                text: "Se eliminó el servicio correctamente!",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No se pudo eliminar el servicio.",
            });
        }
    };

    return (
        <>
            <NavBar></NavBar>
            <div className="container">
                <CanvaOpciones></CanvaOpciones>
                <h2>Lista de servicios</h2>
                <button id='btn-agregar' className='btn btn-primary'>
                <Link  id='btn-link' className='nav-item-active' to='/agregarServicioAdmin'>...</Link>Agregar</button>
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
                                    <td>
                                        <button id='btn-editar' className="btn btn-warning"> Editar

                                        </button>
                                        <button id='btn-eliminar' className='btn btn-danger'
                                            onClick={() => {
                                                eliminar(s._id);
                                            }}
                                        > Eliminar

                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </>
    )
}
