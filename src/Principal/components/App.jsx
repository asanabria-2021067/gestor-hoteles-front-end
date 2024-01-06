import React, { useState } from "react";
import { NavBar } from './NavBar'
import { Slide } from './Slide'
import { Presentacion } from './Presentacion'
import { Tendencia } from './Tendencia'
import { Footer } from './Footer'
import { DestinosHoteles } from "./DestinosHoteles";
import { Contactanos } from "./Contacto";

export const App = () => {
  return (
    <>
        <NavBar></NavBar>
        <Slide></Slide>
        <Tendencia></Tendencia>
        <DestinosHoteles></DestinosHoteles>
        <Presentacion></Presentacion>
        <Contactanos></Contactanos>
        <Footer></Footer>
    </>
  );
}
