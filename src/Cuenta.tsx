import React, { useEffect, useState } from "react";
import "./Chat.css";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

///prueba 8

function Cuenta() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
  nombres: '',
  apellidoP: '',
  apellidoM: '',
  fechaN: '',
  correo: ''
});
const selectUser = async () => {
  try {
    const nickname = localStorage.getItem("nickname");
    if (!nickname) {
      console.error("No se encontró el nickname del usuario");
      return;
    }
    const response = await fetch(`http://127.0.0.1:8000/getUser/${nickname}`);
    const data = await response.json();
    setUserInfo(data); // Actualiza el estado con los datos del usuario
    console.log(data);
    //console.log(`http://127.0.0.1:8000/getUser/${nickname}`);
  } catch (error) {
    console.error("Error al obtener la información del usuario:", error);
  }
};

useEffect(() => {
  selectUser();
}, []);
  //
  /*const selectUser = async () => {
    try {
      const nickname = localStorage.getItem("nickname");
      console.log(nickname);
      const $variable = await fetch(
        "http://localhost/marketplace/back/Endpoint.php",
        {
          method: "POST",
          body: JSON.stringify({
            action: "getUser",
            nickname: nickname,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((res) => res.json())
        .then((json) => console.log(json));
    } catch (error) {
      console.log(error);
    }

  };
  useEffect(() => {
    selectUser();
  }, []);*/
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

      <section className="informacion-usuario">
        {/*<h2>Información del Usuario</h2>*/}
        <table>
          <tr>
            <th colSpan="2">Información del Usuario</th>
          </tr>
          <tr>
            <td>Nombre:</td>
            <td>{userInfo.nombres}</td>
          </tr>
          <tr>
            <td>Apellidos:</td>
            <td>{`${userInfo.apellidoP} ${userInfo.apellidoM}`}</td>
          </tr>
          <tr>
            <td>Fecha de Nacimiento:</td>
            <td>{userInfo.fechaN}</td>
          </tr>
          <tr>
            <td>Correo:</td>
            <td>{userInfo.correo}</td>
          </tr>
        </table>

        <a href="">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/Actualizacion");
            }}
          >
            Actualizar Información
          </button>
        </a>
      </section>

      <section className="publicaciones-usuario">
        {/* <h2>Publicaciones</h2>*/}
        <table>
          <tr>
            <th>Publicaciones</th>
          </tr>
          <tr>
            <td>
              <a href="publicacion1.html">Nombre de la Publicación 1</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="publicacion2.html">Nombre de la Publicación 2</a>
            </td>
          </tr>
        </table>
      </section>
    </div>
  );
}

export default Cuenta;
