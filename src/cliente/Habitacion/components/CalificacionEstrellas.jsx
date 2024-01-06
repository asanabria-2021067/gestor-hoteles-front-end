import React from 'react';

export const CalificacionEstrellas = ({ calificacion, reservacion }) => {
  const calcularEstrellas = () => {
    const numEstrellas = Math.round(calificacion); 
    const estrellas = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= numEstrellas) {
        estrellas.push(<i key={i} className="fa fa-star text-warning mx-1"></i>);
      } else {
        estrellas.push(<i key={i} className="fa fa-star-o text-warning mx-1"></i>);
      }
    }

    return estrellas;
  };

  return (
    <div className="d-flex align-items-center mt-2">
      {calificacion && calificacion > 0 ? (
        <>
          <span className="text-start"></span>
          {calcularEstrellas()} ({reservacion})
        </>
      ) : (
        <span className="text-start"><strong>Sin calificación</strong></span>
      )}
    </div>
  );
};

export const SoloCalificacionEstrellas = ({ calificacion }) => {
  const calcularEstrellas = () => {
    const numEstrellas = Math.round(calificacion); 
    const estrellas = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= numEstrellas) {
        estrellas.push(<i key={i} className="fa fa-star text-warning mx-1"></i>);
      } else {
        estrellas.push(<i key={i} className="fa fa-star-o text-warning mx-1"></i>);
      }
    }

    return estrellas;
  };

  return (
    <div className="d-flex align-items-center mt-2">
      {calificacion && calificacion > 0 ? (
        <>
          <span className="text-start"></span>
          {calcularEstrellas()}
        </>
      ) : (
        <span className="text-start"><strong>Sin calificación</strong></span>
      )}
    </div>
  );
};
