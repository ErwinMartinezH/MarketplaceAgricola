import React, { useEffect, useState } from "react";
import "./Principal.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

function Guardados() {
  const nickname = localStorage.getItem("nickname");
  const navigate = useNavigate();
  const [publicacionesGuardadas, setPublicacionesGuardadas] = useState([]);

  useEffect(() => {
    const fetchPublicacionesGuardadas = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/getGuardados${nickname}`);
        setPublicacionesGuardadas(response.data);
      } catch (error) {
        console.error("Error al obtener las publicaciones guardadas", error);
      }
    };

    fetchPublicacionesGuardadas();
  }, []);
  return (
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
      <div className="publicaciones">
        <div className="tabla">
          <div className="publicaciones-container">
            {publicacionesGuardadas.map((publicacion) => (
              
              <div key={publicacion.id} className="publicacion-rectangulo">
               {/* <img src={/* URL de la imagen } alt="Imagen de la publicación" />*/}
                <h3>{publicacion.Nombre}</h3>
                <p>{publicacion.Precio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guardados;

async function smallpublication() {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "smallPost" }), // Ajusta según la acción necesaria
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
    return []; // Devuelve un array vacío en caso
  }}
