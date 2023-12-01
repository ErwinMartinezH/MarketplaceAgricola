import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function PaginaDeActualizacion() {
  /**"nickname": "string",
  "telefono": "string",
  "calle1": "string",
  "calle2": "string",
  "colonia": "string",
  "lote": 0,
  "municipio": "string",
  "estado": "string",
  "pais": "string" */
  const navigate = useNavigate();
  const [Nickname, setNickname] = useState();
  const [Telefono, setTelefono] = useState();
  const [Calle1, setCalle1] = useState();
  const [Calle2, setCalle2] = useState();
  const [Colonia, setColonia] = useState();
  const [Lote, setLote] = useState();
  const [Municipio, setMunicipio] = useState();
  const [Estado, setEstado] = useState();
  const [Pais, setPais] = useState();

  //
  const Actualizacion = async () =>{
    try {
      const data = {
        nickname: Nickname,
        telefono: Telefono,
        calle1: Calle1,
        calle2: Calle2,
        colonia: Colonia,
        lote: parseInt(Lote),
        municipio: Municipio,
        estado: Estado,
        pais: Pais
      };
    
      const response = await fetch("http://127.0.0.1:8000/updateuser", {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.status === 200) {
        // La solicitud fue exitosa
        const json = await response.json();
        console.log(json);
        navigate("/Cuenta");
      } else {
        // Manejar errores
        console.error("Error en la solicitud:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
}
  return (
    <section className="informacion-usuario">
      <header>
        <h1>Actualizar Información del Usuario</h1>
      </header>

      {/* Formulario para actualizar la información del usuario */}
      <h2>Información del Usuario</h2>
      <form>
        <table>
          <tbody>
          <tr>
              <td>Nombre de usuario:</td>
              <td>
                <input
                  type="text" required value={Nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Telefono:</td>
              <td>
                <input
                  type="text" required value={Telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Calle:</td>
              <td>
                <input
                  type="text" required value={Calle1}
                  onChange={(e) => setCalle1(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Calle:</td>
              <td>
                <input
                  type="text" required value={Calle2}
                  onChange={(e) => setCalle2(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Colonia:</td>
              <td>
                <input
                  type="text" required value={Colonia}
                  onChange={(e) => setColonia(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Lote:</td>
              <td>
                <input
                  type="text" required value={Lote}
                  onChange={(e) => setLote(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Municipio:</td>
              <td>
                <input
                  type="text" required value={Municipio}
                  onChange={(e) => setMunicipio(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Estado:</td>
              <td>
                <input
                  type="text" required value={Estado}
                  onChange={(e) => setEstado(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Pais:</td>
              <td>
                <input
                  type="text"
                  required
                  value={Pais}
                  onChange={(e) => setPais(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={(e) => {
              e.preventDefault();
                Actualizacion();
              }}>Actualizar</button>
      </form>
    </section>
  );
}

export default PaginaDeActualizacion;
