import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminHome.css";
import NavbarProfile from "../navbarProfile/NavbarProfile";

const AdminHome = () => {
    
    const navigate = useNavigate();

    const logOut = (e) =>{
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    }

  return (
    <div>
          <NavbarProfile/>
      <body className="inicioAdmin">
        <header className="content header">
          <h2 className="title">Bienvenido Administrador</h2>
          <p>Seleccione lo que desee visualizar</p>

          <div className="btn-home">
            <Link to={"/register"}>
              <a className="btn">Registrar Usuario</a>
            </Link>
            <Link to={"/registerCompany"}>
              <a className="btn">Registrar Empresa</a>
            </Link>
          </div>
        </header>

        <section className="content sau">
          <div className="box-container">
            <div className="box">
              <i className="fab fa-angular"></i>
              <h3>Ver/Registrar Usuario</h3>
              <p>
                Puede agregar un nuevo usuario o ver los usuarios registrados
              </p>
            </div>
            <div className="box">
              <i className="fab fa-apple"></i>
              <h3>Ver/Registrar Empresa</h3>
              <p>
                Puede agregar una nueva empresa o ver las empresas ya
                registradas
              </p>
            </div>
            <div className="box">
              <i className="fab fa-android"></i>
              <h3>Ingresar como usuario normal</h3>
              <p>Ingresa al programa como un usuario normal</p>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default AdminHome;
