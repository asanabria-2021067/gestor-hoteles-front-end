import React from "react";
import { App } from "./Principal/components/App";
import { Navigate, Route, Routes } from "react-router-dom";
import { isUserLogged } from "./login/helpers/loginHelper";
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
export const AppRouter = () => {
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
          element={
            isUserLogged() ? <Hotel></Hotel> : <Navigate to="/app" />
          }
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
          path="/eventoId/:id"
          element={
            isUserLogged() ? <EventoId></EventoId> : <Navigate to="/app" />
          }
        ></Route>
        <Route
          path="/reservacion"
          element={
            isUserLogged() ? (
              <Reservacion></Reservacion>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>

        {/* RUTAS ADMIN HOTEL */}
        
      </Routes>
    </>
  );
};
