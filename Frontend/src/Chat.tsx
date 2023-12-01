// Chat.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


function Chat() {
  const [conversaciones, setConversaciones] = useState([]);
  const nombreuser = localStorage.getItem("nickname");

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener la lista de todas las conversaciones del usuario
    axios.get(`http://127.0.0.1:8000/getConversaciones?${nombreuser}`)
      .then((response) => {
        // Procesa la respuesta del servidor para obtener la lista de conversaciones
        const listaConversaciones = response.data;
        setConversaciones(listaConversaciones);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de conversaciones", error);
      });
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
      <div className="chat">
      <ul>
        {conversaciones.map((conversacion, index) => (
          <li key={index}>{conversacion.nombre}</li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Chat;