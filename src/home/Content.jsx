import React from "react";
import { Link } from "react-router-dom";

export const Content = () => {
  return (
    <div className="container display" style={{ minHeight: "80vh" }}>
      <div className="container mb-4">
        <h1 className="mt-4 text-center text-light">
          Gestiona novedades, genera nominas, liquida prestaciones sociales,
          crea facturas, gestiona inventarios, cartera y muchos mas !!!
        </h1>
        <Link to="/login" className="btn btn-light btn-lg text-dark">
          Acceder
        </Link>
      </div>
    </div>
  );
};
