import React, { useEffect, useState } from 'react';
import { NavBar } from '../../../Principal/components/NavBar';
import { Footer } from '../../../Principal/components/Footer';
import Swal from 'sweetalert2';
import { CanvaOpciones } from '../../CanvaOpciones';
import { Link } from 'react-router-dom';
import { apiHabitaciones } from '../api/apiHabitaciones';

export const ListaHabitaciones = () => {
    const [listaHabitacionesA, setListaHabitacionesA] = useState([]);
    console.log(listaHabitacionesA);
    const [showModal, setShowModal] = useState(false);

    const viewHabitacionesList = async () => {
        const getListaHabitacionesFromApi = await apiHabitaciones();
        setListaHabitacionesA(getListaHabitacionesFromApi);
    };

    useEffect(() => {
        viewHabitacionesList();
    }, [showModal]);

    return (

        <>
            <NavBar></NavBar>
            <div className="container">
                <h2>Lista de habitaciones</h2>
                <CanvaOpciones></CanvaOpciones>
                <button id='btn-agregar' className='btn btn-primary'>
                    <Link id='btn-link' className='nav-item-active' to='/agregarHotelAdmin'>...</Link>Agregar</button>
                <table className="table">
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Numero</th>
                            <th scope="col">Costo</th>
                            <th scope='col'>Capacidad</th>
                            <th scope='col'>descripcion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaHabitacionesA.map((h) => {
                            return (

                                <tr key={h._id}>
                                    <th scope="row">{h._id}</th>

                                    <td>{h.tipo}</td>
                                    <td>{h.numero}</td>
                                    <td>{h.costo}</td>
                                    <td>{h.capacidad}</td>
                                    <td>{h.descripcion}</td>
                                    <td>
                                        <button id='btn-editar' className="btn btn-warning"> Editar

                                        </button>
                                        {/* <button id='btn-eliminar' className='btn btn-danger'
                                            onClick={() => {
                                                eliminar(u._id);
                                            }}
                                        > Eliminar

                                        </button> */}
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
