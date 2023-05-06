import React from "react";
import { App } from "./Principal/components/App";
import { Navigate, Route, Routes } from "react-router-dom";
import { isUserAuthenticated } from "./login/helpers/LoginHelper";
import { Login } from "./login/components/Login";
import { NavBar } from "./Navbar";
import { Hotel } from "./cliente/Principal/components/Hotel";
import { Habitaciones } from "./cliente/Habitacion/components/Habitaciones";
import { Hoteles } from "./Principal/components/Hoteles";
export const AppRouter = () => {
  return (
    <>
      <Routes>
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

        <Route path="/login" element={<Login></Login>}></Route>

        <Route
          path="/hoteles"
          element={<Hoteles></Hoteles>}
        ></Route>
        <Route
          path="/habitacion/:id"
          element={<Habitaciones></Habitaciones>}
        ></Route>
      </Routes>
    </>
  );
};
