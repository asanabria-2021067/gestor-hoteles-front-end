import React from "react";
import { App } from "./Principal/components/App";
import { Navigate, Route, Routes } from "react-router-dom";
import { isSuperAdmin, isUserLogged } from "./login/helpers/loginHelper";
import { Login } from "./login/components/Login";
import { Hotel } from "./cliente/Principal/components/Hotel";
import { Habitaciones } from "./cliente/Habitacion/components/Habitaciones";
import { HabitacionPorId } from "./cliente/Habitacion/components/HabitacionPorId";
import { Servicio } from "./cliente/Servicio/components/Servicio";
import { Evento } from "./cliente/Evento/components/Evento";
import { Reservacion } from "./cliente/Reservacion/components/Reservacion";
import { ServicioId } from "./cliente/Servicio/components/ServicioPorId";
import { EventoId } from "./cliente/Evento/components/EventoPorId";
import { Hoteles } from "./Principal/components/Hoteles";
import { Perfil } from "./cliente/Usuario/components/Perfil";
import { ListaHabitaciones } from "./super-admin/Habitaciones/components/ListaHabitaciones";
import { ListaHoteles } from "./super-admin/Hoteles/components/ListaHoteles";
import { CreateHoteles } from "./super-admin/Hoteles/components/CreateHoteles";
import { ListaEventos } from "./super-admin/Eventos/components/ListaEventos";
import { CreateEventos } from "./super-admin/Eventos/components/CreateEventos";
import { ListaServicio } from "./super-admin/Servicios/components/ListaServicio";
import { CreateServicio } from "./super-admin/Servicios/components/CreateServicio";
import { ListaUsuarios } from "./super-admin/Usuarios/components/ListaUsuarios";
import { HistorialReservacion } from "./cliente/Usuario/components/HistorialReservacion";
export const AppRouter = () => {
  const userIsSuperAdmin = isSuperAdmin();
  return (
    <>
      <Routes>
        {/* RUTAS PRINCIPALES */}
        <Route path="/" element={<App></App>}></Route>
        <Route
          path="/app"
          element={!isUserLogged() ? <App></App> : <Navigate to="/"></Navigate>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        {/* RUTAS TOKEN. Rutas a las que se puede acceder solo con estar logeado */}
        <Route
          path="/servicios"
          element={
            isUserLogged() ? <Servicio></Servicio> : <Navigate to="/app" />
          }
        ></Route>
        <Route
          path="/servicioId/:id"
          element={
            isUserLogged() ? <ServicioId></ServicioId> : <Navigate to="/app" />
          }
        ></Route>
        <Route
          path="/hoteles"
          element={isUserLogged() ? <Hotel></Hotel> : <Navigate to="/app" />}
        ></Route>
        <Route path="/hotelesVista" element={<Hoteles></Hoteles>}></Route>
        <Route
          path="/habitacion/:id"
          element={
            isUserLogged() ? (
              <Habitaciones></Habitaciones>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>
        <Route
          path="/habitacionId/:id"
          element={
            isUserLogged() ? (
              <HabitacionPorId></HabitacionPorId>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>
        <Route
          path="/eventos"
          element={isUserLogged() ? <Evento></Evento> : <Navigate to="/app" />}
        ></Route>
        <Route
          path="/miPerfil"
          element={isUserLogged() ? <Perfil></Perfil> : <Navigate to="/app" />}
        ></Route>

        <Route
          path="/historialReservacion"
          element={isUserLogged() ? <HistorialReservacion></HistorialReservacion> : <Navigate to="/app" />}
        ></Route>

        <Route
          path="/eventoId/:id"
          element={
            isUserLogged() ? <EventoId></EventoId> : <Navigate to="/app" />
          }
        ></Route>
        <Route
          path="/reservacion"
          element={
            isUserLogged() ?
              <Reservacion></Reservacion>
              :
              <Navigate to="/app" />

          }
        ></Route>

        {/* RUTAS SUPER ADMIN */}
        {userIsSuperAdmin && (
          <Route
            path="/listaHabitacionesAdmin"
            element={<ListaHabitaciones></ListaHabitaciones>}
          ></Route>
        )}

        <Route
          path="/listaHotelesAdmin"
          element={<ListaHoteles></ListaHoteles>}
        ></Route>

        <Route
          path="/agregarHotelAdmin"
          element={<CreateHoteles></CreateHoteles>}
        ></Route>

        <Route
          path="/listaEventosAdmin"
          element={<ListaEventos></ListaEventos>}
        ></Route>

        <Route
          path="/agregarEventoAdmin"
          element={<CreateEventos></CreateEventos>}
        ></Route>

        <Route
          path="/listaServiciosAdmin"
          element={<ListaServicio></ListaServicio>}
        ></Route>

        <Route
          path="/agregarServicioAdmin"
          element={<CreateServicio></CreateServicio>}
        ></Route>

        <Route
          path="/listaUsuariosAdmin"
          element={<ListaUsuarios></ListaUsuarios>}
        ></Route>
      </Routes>
    </>
  );
};
