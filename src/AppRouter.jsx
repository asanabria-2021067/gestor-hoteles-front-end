import React from "react";
import { App } from "./Principal/components/App";
import { Navigate, Route, Routes } from "react-router-dom";
import { isUserAuthenticated } from "./login/helpers/LoginHelper";
import { Login } from "./login/components/Login";
import { NavBar } from "../src/Principal/components/NavBar";
import { Hotel } from "./cliente/Principal/components/Hotel";
import { Habitaciones } from "./cliente/Habitacion/components/Habitaciones";
import { Hoteles } from "./Principal/components/Hoteles";
import { Footer } from "./Principal/components/Footer";
import { ListaEventos } from "./administrador/components/ListaEventos";
import { ListaServicio } from "./administrador/components/ListaServicio";
import { ListaUsuarios } from "./administrador/components/ListaUsuarios";
import { Registro } from "./login/components/Registro";
import { CreateEventos } from "./administrador/components/CreateEventos";
import { CreateServicio } from "./administrador/components/CreateServicio";
export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route
          path="/agregarServicioAdmin"
          element={
            <CreateServicio></CreateServicio>
          }
        ></Route>

        <Route
          path="/agregarEventoAdmin"
          element={
            <CreateEventos></CreateEventos>
          }
        ></Route>

        <Route
          path="/"
          element={isUserAuthenticated() ? <App></App> : <Navigate to="/app" />}
        ></Route>

        <Route
          path="/app"
          element={
            !isUserAuthenticated() ? <App></App> : <Navigate to="/"></Navigate>
          }
        ></Route>

        <Route
          path="/listaEventosAdmin"
          element={
            <ListaEventos></ListaEventos>
          }
        ></Route>

        <Route
          path="/listaServiciosAdmin"
          element={
            <ListaServicio></ListaServicio>
          }
        ></Route>



        <Route
          path="/listaUsuariosAdmin"
          element={
            <ListaUsuarios></ListaUsuarios>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>

        <Route
          path="/hoteles"
          element={<Hotel></Hotel>}
        ></Route>
        <Route
          path="/hotelesCliente"
          element={<Hoteles></Hoteles>}
        ></Route>

        <Route
          path="/registro"
          element={<Registro></Registro>}
        ></Route>

        <Route
          path="/habitacion/:id"
          element={<Habitaciones></Habitaciones>}
        ></Route>
      </Routes>
    </>
  );
};
