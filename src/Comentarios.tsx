// Comentarios.js
import React, { useState } from 'react';

const Comentarios = ({ comentarios }) => {
  const [nuevoComentario, setNuevoComentario] = useState('');

  const agregarComentario = () => {
    // Aquí puedes manejar la lógica para agregar comentarios
  };

  return (
    <div className="comentarios-section">
      <h3>Comentarios</h3>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <div>
        <textarea
          placeholder="Añadir comentario..."
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
        />
        <button onClick={agregarComentario}>Agregar Comentario</button>
      </div>
    </div>
  );
};

export default Comentarios;
