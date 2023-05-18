import React from "react";
import { App } from "./Principal/components/App";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  isAdmin,
  isSuperAdmin,
  isUserLogged,
} from "./login/helpers/loginHelper";
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
import { CreateUsuario } from "./super-admin/Usuarios/components/CreateUsuario";
import { EstadisticasHotel } from "./super-admin/Hoteles/components/EstadisticasHotel";
import { Principal } from "./super-admin/Principal";
import { HotelesBuscador } from "./Principal/components/HotelesBuscador";
import { Registro } from "./login/components/Registro";
import { PrincipalAdmin } from "./admin-hotel/PrincipalAdmin";
import { MiHotel } from "./admin-hotel/MiHotel";
import { UsuarioBuscador } from "./admin-hotel/Usuarios/components/UsuarioBuscador";
import { ListaReservaciones } from "./admin-hotel/Reservaciones/components/Reservaciones";
import { PerfilAdmin } from "./admin-hotel/Usuarios/components/MiPerfilAdmin";
import { PerfilSuperAdmin } from "./super-admin/Usuarios/components/MiPerfilSuperAdmin";
import { HistorialReservacion } from "./cliente/Usuario/components/HistorialReservacion";
import { CreateHabitacion } from "./super-admin/Habitaciones/components/AgregarHabitacion";
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
        <Route path="/registro" element={<Registro></Registro>}></Route>
        <Route
          path="/hotelesBuscador/:hotel"
          element={<HotelesBuscador></HotelesBuscador>}
        ></Route>

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
        <Route
          path="/historialReservacion"
          element={isUserLogged() ? <HistorialReservacion></HistorialReservacion> : <Navigate to="/app" />}
        ></Route>

        {/* RUTAS SUPER ADMIN */}

        <Route
          path="/miPerfilSuperAdmin"
          element={
            isSuperAdmin() ? <PerfilSuperAdmin></PerfilSuperAdmin> : <Navigate to="/app" />
          }
        ></Route>

        <Route
          path="/principalSuperAdmin"
          element={
            isSuperAdmin() ? <Principal></Principal> : <Navigate to="/app" />
          }
        ></Route>

        <Route
          path="/listaHabitacionesAdmin"
          element={
            isSuperAdmin() ? (
              <ListaHabitaciones></ListaHabitaciones>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>

        <Route
          path="/listaHotelesAdmin"
          element={
            isSuperAdmin() ? (
              <ListaHoteles></ListaHoteles>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>

        <Route
          path="/agregarHotelAdmin"
          element={
            isSuperAdmin() ? (
              <CreateHoteles></CreateHoteles>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>
        <Route
        path="/agregarHabitacion"
        element={isSuperAdmin ? <CreateHabitacion /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/listaEventosAdmin"
          element={
            isSuperAdmin() ? (
              <ListaEventos></ListaEventos>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>

        <Route
          path="/agregarEventoAdmin"
          element={
            isSuperAdmin() ? (
              <CreateEventos></CreateEventos>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>

        <Route
          path="/listaServiciosAdmin"
          element={
            isSuperAdmin() ? (
              <ListaServicio></ListaServicio>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>

        <Route
          path="/agregarServicioAdmin"
          element={
            isSuperAdmin() ? (
              <CreateServicio></CreateServicio>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>

        <Route
          path="/listaUsuariosAdmin"
          element={
            isSuperAdmin() ? (
              <ListaUsuarios></ListaUsuarios>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>

        <Route
          path="/agregarUsuariosAdmin"
          element={
            isSuperAdmin() ? (
              <CreateUsuario></CreateUsuario>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>
        <Route
          path="/estadisticasHotel"
          element={
            isSuperAdmin() ? (
              <EstadisticasHotel></EstadisticasHotel>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>

        {/* RUTAS ADMIN DEL HOTEL */}
        <Route
          path="/principalAdmin"
          element={
            isAdmin() ? (
              <PrincipalAdmin></PrincipalAdmin>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>

        <Route
          path="/miHotel/:id"
          element={isAdmin() ? <MiHotel></MiHotel> : <Navigate to="/app" />}
        ></Route>

        <Route
          path="/miPerfilAdmin"
          element={isAdmin() ? <PerfilAdmin></PerfilAdmin> : <Navigate to="/app" />}
        ></Route>

        <Route
          path="/buscadorUsuarios"
          element={
            isAdmin() ? (
              <UsuarioBuscador></UsuarioBuscador>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>

        <Route
          path="/listaReservaciones"
          element={
            isAdmin() ? (
              <ListaReservaciones></ListaReservaciones>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>
      </Routes>
    </>
  );
};
