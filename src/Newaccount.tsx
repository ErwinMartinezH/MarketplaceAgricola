import React, {useState} from "react";
import './Newaccount.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Newaccount() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [apellidoP, setApellidoP] = useState('');
  const [fecha, setFecha] = useState('');
  const [correo, setCorreo] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [apellidoM, setApellidoM] = useState('');

  const createuser = async () => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/createuser", {
            nickname: nickname,
            password: password,
            nombres: name,
            apellidoP: apellidoP,
            apellidoM: apellidoM,
            fechaN: fecha,
            correo: correo,
        });

        console.log(response.data);
        navigate("/Principal");
    } catch (error) {
        console.error(error);
    }
};
  return (
    <section className="newaccount-section">
      <div className="contenedor">
        <div className="formulario">
          <form action="#">
            <h3>New Account</h3>
            {/*name*/}
            <div className="input-contenedor">
              <input type="text" required  value={name}
              onChange={(e) => setName(e.target.value)}/>
              <label htmlFor="">Name</label>
            </div>
            {/*Last name */}
            <div className="input-contenedor">
              <input type="text" required value={apellidoP}
              onChange={(e) => setApellidoP(e.target.value)}/>
              <label htmlFor="">Last name</label>
            </div>
            {/*Segundo apellido*/}
            <div className="input-contenedor">
              <input type="text" required value={apellidoM}
              onChange={(e) => setApellidoM(e.target.value)}/>
              <label htmlFor="">Apellido M</label>
            </div>
            {/*Date*/}
            <div className="input-contenedor">
              <input type="date" required value={fecha}
              onChange={(e) => setFecha(e.target.value)}/>
              <label htmlFor=""></label>
            </div>
            {/*{   Phone
            <div className="input-contenedor">
              <input type="text" required />
              <label htmlFor="">Phone</label>
            </div>*/}
            {/*Direction
            <div className="input-contenedor">
              <input type="text" required />
              <label htmlFor="">Direcction</label>
          </div>*/}
            {/*email*/}
            <div className="input-contenedor">
              <input type='email' required value={correo}
              onChange={(e) => setCorreo(e.target.value)}/>
              <label htmlFor="">email</label>
            </div>
            {/*User name*/}
            <div className="input-contenedor">
              <input type="text" required value={nickname}
              onChange={(e) => setNickname(e.target.value)}/>
              <label htmlFor="">User name</label>
            </div>
            {/*Password*/}
            <div className="input-contenedor">
              <input type="password" required value={password}
              onChange={(e) => setPassword(e.target.value)}/>
              <label htmlFor="">Password</label>
            </div>
          </form>
          <div>
            <button
              className="button1"
              onClick={() => {
                createuser();
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newaccount;
/*
async function NewaccountB(name,apellidoP,apellidoM,fecha,correo,nickname,password){
  let creacion = false;
  try {
    const response = await fetch('http://localhost/marketplace/back/Endpoint.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify({
        action: 'singup',
        nickname: nickname,
        pass:password,
        nombres: name,
        apellidoP: apellidoP,
        apellidoM: apellidoM,
        fechaN: fecha,
        correo: correo
      })
    });
    const data = await response.json();
    console.log(data);
    if (data.estatus === 'ok'){
      console.log("ok");
      window.alert('ok');
      creacion = true;
    }else{
      alert('Cuenta no creadad');
    }

  } catch (error) {
    console.error('Error: de consulta',error);
    
  }
   return creacion;
}*/

