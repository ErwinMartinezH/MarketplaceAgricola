// Chat.js
import React, { useState } from 'react';

const Chat = ({ usuarioActual, otroUsuario }) => {
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  const enviarMensaje = () => {
    // Simulación de envío de mensaje
    const mensajeEnviado = {
      id: mensajes.length + 1,
      remitente: usuarioActual,
      destinatario: otroUsuario,
      contenido: nuevoMensaje,
    };

    // Agrega el nuevo mensaje al arreglo de mensajes
    setMensajes([...mensajes, mensajeEnviado]);

    // Limpia el campo del nuevo mensaje
    setNuevoMensaje('');
  };

  return (
    <div className="chat-container">
      <h2>Chat con {otroUsuario}</h2>
      <div className="mensajes-container">
        {mensajes.map((mensaje) => (
          <div
            key={mensaje.id}
            className={mensaje.remitente === usuarioActual ? 'mensaje-propio' : 'mensaje-otro-usuario'}
          >
            <strong>{mensaje.remitente}: </strong>{mensaje.contenido}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
        />
        <button onClick={enviarMensaje}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
