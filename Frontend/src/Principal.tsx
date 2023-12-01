import React, { useEffect, useState } from "react";
import "./Principal.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PublicacionDetalleModal from "./Publicaciondetallemodal"; // Ajusta la ruta según tu estructura de carpetas
import axios from 'axios';

function Principal() {
  const navigate = useNavigate();
  const [publicaciones, setPublicaciones] = useState([]);
  const [selectedPublicacion, setSelectedPublicacion] = useState(null);

  const fetchPublicaciones = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/getSmallPublicaciones/');
      console.log("Respuesta completa del servidor:", response.data);
      setPublicaciones(response.data);
    } catch (error) {
      console.error("Error al obtener las publicaciones", error);
    }
  };
  useEffect(() => {
    fetchPublicaciones();
    console.log(publicaciones); 
  }, []);
  const handlePublicacionClick = (id) => {
    localStorage.setItem("selectedPublicacionId", id);
    navigate("/Publicacion");
  };
  
  return (  
    <>
      <div>
      <nav>
        <Link to="/Principal">
          <a href="">Inicio</a>
        </Link>
        <Link to="/Chat">
          <a href="">Chat</a>
        </Link>
        <Link to="/Guardados">
          <a href="">Guardados</a>
        </Link>
        <Link to="/Cuenta">
          <a href="">Cuenta</a>
        </Link>
      </nav>
      </div>
      <div className="publicaciones">
        <div className="tabla">
          <button onClick={(e) =>{
            navigate("/Nueva publicacion");
          }}>Nueva publicacion</button>
          <div className="publicaciones-container">
            {publicaciones.map((publicacion) => (
              
              <div key={publicacion.id} className="publicacion-rectangulo">
               {/* <img src={/* URL de la imagen } alt="Imagen de la publicación" />*/}
                <h3>{publicacion.Nombre}</h3>
                <p>{publicacion.Precio}</p>
                <button onClick={() => handlePublicacionClick(publicacion.id)}>
            Ver Detalles
          </button>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Principal;
/*
async function smallpublication() {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "smallPost" }) // Ajusta según la acción necesaria
    };

    const response = await fetch(
      "http://localhost/marketplace/back/Endpoint.php",
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return []; // Devuelve un array vacío en caso de error
  }
}
*/
