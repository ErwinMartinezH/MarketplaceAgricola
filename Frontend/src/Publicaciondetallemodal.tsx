// PublicacionDetalleModal.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Publicaciondetallemodal() {
  const [detalle, setDetalle] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const [nuevocoment, setNuevocoment] = useState();

  useEffect(() => {
    const publicacionId = localStorage.getItem("selectedPublicacionId");

    if (publicacionId) {
      axios.get(`http://127.0.0.1:8000/getAllPublicaciones/${publicacionId}`)
        .then(response => {
          setDetalle(response.data);
        })
        .catch(error => {
          console.error("Error al obtener detalles de la publicación", error);
        });
    }
  }, []);
  
  const Comentarionuevo = async (e) => {
    const publicacionId = localStorage.getItem("selectedPublicacionId");
    const nombreuser = localStorage.getItem("nickname");
    try {
      const response = await axios.post('http://127.0.0.1:8000/newComentario', {
        idPublicacion: publicacionId,
        nickname: nombreuser  ,
        comentario: nuevocoment,
      });
      
      // Manejar la respuesta aquí si es necesario
      console.log("Comentario creado con éxito:", response.data);
      
      // Puedes redirigir o realizar otras acciones después de crear el comentario
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al crear el comentario", error);
    }
  };
  const fetchComentarios = async () => {
    const publicacionId = localStorage.getItem("selectedPublicacionId");

    try {
      const response = await axios.get(`http://127.0.0.1:8000/getComentarios${publicacionId}`);
      console.log("Respuesta completa del servidor:", response.data);
      setComentarios(response.data);
    } catch (error) {
      console.error("Error al obtener las publicaciones", error);
    }
  };
  useEffect(() => {
    fetchComentarios();
    console.log(comentarios); 
  }, []);
  return (
    <div>
      {detalle ? (
        <div>
          <h1>{detalle.nombre}</h1>
          <h2>{detalle.fecha}</h2>
          <label htmlFor="">{detalle.precio}</label>
          <label htmlFor="">{detalle.unidad}</label>
          <p>{detalle.descripcion}</p>
          <label htmlFor="">{detalle.nombres}</label>
          <label htmlFor="">{detalle.telefono}</label>
          <label htmlFor="">{detalle.correo}</label>
          <label htmlFor="">{detalle.web}</label>
          <label htmlFor="">{detalle.calle1}</label>
          <label htmlFor="">{detalle.calle2}</label>
          <label htmlFor="">{detalle.lote}</label>
          <label htmlFor="">{detalle.colonia}</label>
          <label htmlFor="">{detalle.municipio}</label>
          <label htmlFor="">{detalle.estado}</label>
          <label htmlFor="">{detalle.pais}</label>
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
      <div>
        <div><button onClick={(e) => {
              e.preventDefault();
              Comentarionuevo(e);
              }}>Agregar comentario</button>
        <label htmlFor="">Comentario</label>
        <input type="text" required value={nuevocoment}
                  onChange={(e) => setNuevocoment(e.target.value)}/>
        </div>
        <h2>Comentarios:</h2>
        {comentarios.map((publicacion) => (
              
              <div key={publicacion.id} className="publicacion-rectangulo">
               {/* <img src={/* URL de la imagen } alt="Imagen de la publicación" />*/}
                <h3>{publicacion.nickname}</h3>
                <p>{publicacion.comentario}</p>
               
              </div>
            ))}
      </div>
    </div>
  );
}

export default Publicaciondetallemodal;