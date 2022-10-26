import React, { useState } from "react";
import "./RegisterEmpresa.css";
import Axios from "axios";
import Swal from "sweetalert2";
import { url } from "../axiosConnect";
import { useNavigate } from "react-router-dom";

const RegisterEmpresa = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState({
    nombreEmpresa: "",
    nombreComercial: "",
    direccionEmpresa: "",
    NITEmpresa: "",
    porcentajeIva: "",
  });

  const headers = {
    headers: {
      Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  const handleEmpresa = (e) => {
    const { name, value } = e.target;
    setCompany({
      ...company,
      [name]: value,
    });
  };

  const agregarEmpresa = (e) => {
    e.preventDefault();
    Axios.post(url + "empresaMaestro/newEmpresaMaestro", company, headers)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon:'success',
          color: "white",
          background: "rgba(0,0,0,0.9)",
          title: "Impuesto agregado satisfactoriamente",
          timer: 5000,
          backdrop: true,
          timerProgressBar: true,
          toast: true
        });
        e.target.reset();
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon:'warning',
          color: "white",
          background: "rgba(0,0,0,0.9)",
          title: err.response.data.message,
          timer: 4000,
          backdrop: true,
          timerProgressBar: true,
          toast: true
        });
      });
  };

  return (
    <body className="register">
      <div className="container">
        <form onSubmit={agregarEmpresa}>
          <div className="form first">
            <div className="details personal">
              <span className="title">Detalles</span>

              <div className="fields">
                <div className="input-field">
                  <label>Nombre Empresa</label>
                  <input
                    type="text"
                    placeholder="Ingrese el nombre"
                    id="nombreEmpresa"
                    name="nombreEmpresa"
                    onChange={handleEmpresa}
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Nombre Comercial</label>
                  <input
                    type="text"
                    placeholder="Ingrese el nombre"
                    id="nombreComercial"
                    name="nombreComercial"
                    onChange={handleEmpresa}
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Direcciòn Empresa</label>
                  <input
                    type="text"
                    placeholder="Ingrese la Direcciòn"
                    id="direccionEmpresa"
                    name="direccionEmpresa"
                    onChange={handleEmpresa}
                    required
                  />
                </div>

                <div className="input-field">
                  <label>NIT Empresa</label>
                  <input
                    type="text"
                    placeholder="Ingrese el NIT"
                    id="NITEmpresa"
                    name="NITEmpresa"
                    onChange={handleEmpresa}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Porcentaje IVA</label>
                  <input
                    type="number"
                    step="any"
                    placeholder="Ingrese el Porcentaje"
                    id="porcentajeIVA"
                    name="porcentajeIVA"
                    onChange={handleEmpresa}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="buttons">
              <button className="sumbit">
                <span className="btnText">Agregar</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
};

export default RegisterEmpresa;
