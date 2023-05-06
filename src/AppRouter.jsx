import React from "react";
import { App } from "./Principal/components/App";
import { Navigate, Route, Routes } from "react-router-dom";
import { isUserAuthenticated } from "./login/helpers/LoginHelper";
import { Login } from "./login/components/Login";
import { Hotel } from "./cliente/Principal/components/Hotel";
import { Habitaciones } from "./cliente/Habitacion/components/Habitaciones";
import { HabitacionPorId } from "./cliente/Habitacion/components/HabitacionPorId";
import { Servicio } from "./cliente/Servicio/components/Servicio";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isUserAuthenticated() ? <App></App> : <Navigate to="/app" />}
        ></Route>

        <Route
          path="/servicios"
          element={<Servicio></Servicio>}
        ></Route>

        <Route
          path="/app"
          element={
            !isUserAuthenticated() ? <App></App> : <Navigate to="/"></Navigate>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>

        <Route
          path="/hoteles"
          element={<Hotel></Hotel>}
        ></Route>
        <Route
          path="/habitacion/:id"
          element={<Habitaciones></Habitaciones>}
        ></Route>
         <Route
          path="/habitacionId/:id"
          element={<HabitacionPorId></HabitacionPorId>}
        ></Route>
      </Routes>
    </>
  );
};
