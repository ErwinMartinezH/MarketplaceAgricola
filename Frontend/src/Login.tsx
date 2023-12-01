import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  
  
  const validar_user = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:8000/login', {
            nickname: nickname,
            password: password,
        });

        if (response.data.msg ==='usuario valido') {
            localStorage.setItem('msg', nickname);
            localStorage.setItem("nickname", nickname);
            navigate("/Principal");
        } else {
            alert('Inicio de sesión fallido');
        }
    } catch (error) {
        alert('Fallo inicio de sesion');
    }
};

  return (
    <section className="login-section">
      <div className="Login-contenedor">
        <div className="formulario">
          <form action="">
            <h2>Login</h2>
            <div className="input-contenedor">
              <input type="text" required value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              />
              <label htmlFor="">User</label>
            </div>
            <div className="input-contenedor">
              <input type="password" required value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="">Password</label>
            </div>
            <div className="olvidar">
              <label form="#">
                <input type="checkbox" />
                Remember
                {/*<a href="#"> I forgot the password</a>*/}
              </label>
            </div>
          </form>
          <div>
            <button
              className="button1"
              
              onClick={(e) => {
                //e.preventDefault();
                validar_user(e);
              }}
            >
              Access
            </button>
            {/*<Button onClick ={(e)=>{
              e.preventDefault
            }} text='Access'/>*/}
            <div className="registrar">
              <p>
                I don´t haven an Account? <Link to = {"/Newaccount"}>New Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
