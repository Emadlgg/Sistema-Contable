import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../axiosConnect";
import Axios from "axios";
import Swal from "sweetalert2";
import login from '../../Shared/img/login.svg'

const Login = () => {
  
  const navigate = useNavigate();
  const [body, setBody] = useState({
    username: "",
    claveUsuario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post(url + "user/login", body)
      .then((res) => {
        console.log(res.data.message);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Bienvenido ${body.username}`,
          showConfirmButton: false,
          timer: 2000,
        });
        localStorage.setItem('token', JSON.stringify(res.data.token))
         e.target.reset();
         navigate('/tareas')
      })
      .catch((err) => {
        console.log("Viene el error", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username or password incorrect",
        });
        e.target.reset();
      });
  };

  return (
    <div>
      <div className="hello">
      <body>
        <div className="login-container">
          <div className="login-info-container">
            <h1 className="title">Log in</h1>
            <div className="social-login"></div>
            <form onSubmit={handleLogin} className="inputs-container">
              <input
                onChange={handleChange}
                className="input"
                type="username"
                placeholder="Username"
                id="username"
                name="username"
              />
              <input
                onChange={handleChange}
                className="input"
                type="password"
                placeholder="Password"
                id="claveUsuario"
                name="claveUsuario"
              />
              <button  className="btn">
                login
              </button>
            </form>
          </div>
          <img
            className="image-container"
            src={login}
            alt="login.svg"
          />
        </div>
      </body>
      </div>
    </div>
  );
};

export default Login;
