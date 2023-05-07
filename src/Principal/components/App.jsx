import React, { useState } from "react";
import { NavBar } from './NavBar'
import { Slide } from './Slide'
import { Presentacion } from './Presentacion'
import { Tendencia } from './Tendencia'
import { Footer } from './Footer'

export const App = () => {
  return (
    <>  
        <NavBar></NavBar>
        <Slide></Slide>
        <Tendencia></Tendencia>
        <Presentacion></Presentacion>
    </>
  );
}
