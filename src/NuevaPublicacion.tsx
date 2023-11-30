// NuevaPublicacion.js
import React, { useState } from 'react';
import "./estilos_newPublication.css"
import { useNavigate } from 'react-router-dom';

const NuevaPublicacion = ({ onClose, onNuevaPublicacion }) => {
  const navigate = useNavigate();
  const [nuevaPublicacion, setNuevaPublicacion] = useState({
    p_nickname: '',
    p_Nombre: '',
    p_Precio: '',
    p_Unidad: '',
    p_Descripcion: '',
    p_Telefono: '',
    p_Correo: '',
    p_Web: '',
    p_Calle1: '',
    p_Calle2: '',
    p_Colonia: '',
    p_Lote: '',
    p_Municipio: '',
    p_Estado: '',
    p_Pais: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevaPublicacion((prevPublicacion) => ({
      ...prevPublicacion,
      [name]: value,
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNuevaPublicacion((prevPublicacion) => ({
      ...prevPublicacion,
      imagen: file,
    }));
  };

  const handleGuardarPublicacion = async () => {
    try {
      const response = await fetch('http://tu-backend.com/newPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname: nuevaPublicacion.p_nickname,
          nombre: nuevaPublicacion.p_Nombre,
          precio: nuevaPublicacion.p_Precio,
          unidad: nuevaPublicacion.p_Unidad,
          descripcion: nuevaPublicacion.p_Descripcion,
          telefono: nuevaPublicacion.p_Telefono,
          correo: nuevaPublicacion.p_Correo,
          web: nuevaPublicacion.p_Web,
          calle1: nuevaPublicacion.p_Calle1,
          calle2: nuevaPublicacion.p_Calle2,
          colonia: nuevaPublicacion.p_Colonia,
          lote: parseInt(nuevaPublicacion.p_Lote), // Convertir a entero
          municipio: nuevaPublicacion.p_Municipio,
          estado: nuevaPublicacion.p_Estado,
          pais: nuevaPublicacion.p_Pais,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Si la respuesta es exitosa, cierra el modal
      onClose();
      navigate("/Principal");
      // También puedes manejar la respuesta del backend según tus necesidades
      const responseData = await response.json();
      console.log('Respuesta del backend:', responseData);

      // Llama a la función proporcionada para manejar la nueva publicación en el frontend
      onNuevaPublicacion(nuevaPublicacion);
    } catch (error) {
      console.error('Error al guardar la publicación:', error);
      // Maneja el error según tus necesidades
    }
  };

  return (
    <div className="nueva-publicacion-modal">
      <h2>Nueva Publicación</h2>

      {/* Campo de carga de imágenes */}
      {/*<label>Imagen:</label>
      <input
        type="file"
        name="imagen"
        accept="image/*"
        onChange={handleImageChange}
        style={{ marginBottom: '10px' }}
      />
      {/* Previsualización de la imagen }
    {nuevaPublicacion.imagen && (
      <img
        src={URL.createObjectURL(nuevaPublicacion.imagen)}
        alt="Previsualización de la imagen"
        className="imagen-preview"
      />
    )}*/}
      <label>Nickname:</label>
      <input type="text" name="p_nickname" value={nuevaPublicacion.p_nickname} onChange={handleInputChange} />
      <label>Nombre:</label>
      <input type="text" name="p_Nombre" value={nuevaPublicacion.p_Nombre} onChange={handleInputChange} />
      <label>Precio:</label>
      <input type="text" name="p_Precio" value={nuevaPublicacion.p_Precio} onChange={handleInputChange} />
      <label>Unidad:</label>
      <input type="text" name="p_Unidad" value={nuevaPublicacion.p_Unidad} onChange={handleInputChange} />
      <label>Descripción:</label>
      <textarea name="p_Descripcion" value={nuevaPublicacion.p_Descripcion} onChange={handleInputChange} />
      <label>Teléfono:</label>
      <input type="text" name="p_Telefono" value={nuevaPublicacion.p_Telefono} onChange={handleInputChange} />
      <label>Correo:</label>
      <input type="text" name="p_Correo" value={nuevaPublicacion.p_Correo} onChange={handleInputChange} />
      <label>Web:</label>
      <input type="text" name="p_Web" value={nuevaPublicacion.p_Web} onChange={handleInputChange} />
      <label>Calle 1:</label>
      <input type="text" name="p_Calle1" value={nuevaPublicacion.p_Calle1} onChange={handleInputChange} />
      <label>Calle 2:</label>
      <input type="text" name="p_Calle2" value={nuevaPublicacion.p_Calle2} onChange={handleInputChange} />
      <label>Colonia:</label>
      <input type="text" name="p_Colonia" value={nuevaPublicacion.p_Colonia} onChange={handleInputChange} />
      <label>Lote:</label>
      <input type="text" name="p_Lote" value={nuevaPublicacion.p_Lote} onChange={handleInputChange} />
      <label>Municipio:</label>
      <input type="text" name="p_Municipio" value={nuevaPublicacion.p_Municipio} onChange={handleInputChange} />
      <label>Estado:</label>
      <input type="text" name="p_Estado" value={nuevaPublicacion.p_Estado} onChange={handleInputChange} />
      <label>País:</label>
      <input type="text" name="p_Pais" value={nuevaPublicacion.p_Pais} onChange={handleInputChange} />
      <div className="botones">
        <button onClick={handleGuardarPublicacion}>Guardar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default NuevaPublicacion;
