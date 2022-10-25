import React from "react";
import "./UserHome.css";
import { Link, useNavigate } from "react-router-dom";


const UserHome = () => {

  const navigate = useNavigate();
  const logOut = (e)=>{
    e.preventDefault();
    localStorage.clear();
    navigate('/')
  }

  return (
    <div>
      <div className="tare" >
      <div className="head">
      <nav className="navbar">
         <a className="po1" onClick={logOut} ><Link> Cerrar Sesiòn</Link></a>
          <a className="po"><Link to={'/perfil'} >Perfil</Link></a>
        </nav>
        <div className="logo">
          <a>Logo</a>
        </div>
      </div>
      <div>
        <header className="content header">
          
          <h2 className="title">Bienvenido</h2>
          <p>Seleccione la operaciòn que desee realizar</p>
          
        </header>
      </div>
      <body style={{ backgroundColor: " #1D1B1B" }} className="inicioUser">
        <section className="content sau">
          <div className="box-container">
            <div className="box">
              <i className="fab fa-angular"></i>
              <h3>Activo Fijo</h3>
              <Link to={'/activoFijo'}  ><a  className="btn">
                Click Para ir
              </a>
              </Link>
            </div>
            <div className="box">
              <i className="fab fa-angular"></i>
              <h3>Cuenta Contable</h3>
              <Link to={'/cuentaContable'} ><a className="btn">
                Click Para ir
              </a></Link>
            </div>
            <div className="box">
              <i className="fab fa-angular"></i>
              <h3>Entidad</h3>
             <Link to={'/entidad'} > <a className="btn">
                Click Para ir
              </a></Link>
            </div>
            <div className="box">
              <i className="fab fa-angular"></i>
              <h3>Impuesto Adicional</h3>
              <Link to={'/impuestoAdicional'} ><a
                className="btn"
              >
                Click Para ir
              </a></Link>
            </div>
            <div className="box">
              <i className="fab fa-angular"></i>
              <h3>Libro Compras</h3>
              <Link to={'/libroComprasVentas'} ><a className="btn">
                Click Para ir
              </a></Link>
            </div>
            <div className="box">
              <i className="fab fa-angular"></i>
              <h3>Partida Contable</h3>
              <Link to={'/partidasContables'} ><a  className="btn">
                Click Para ir
              </a></Link>
            </div>
            <div className="box">
              <i className="fab fa-angular"></i>
              <h3>Periodo</h3>
              <Link to={'/periodos'} ><a  className="btn">
                Click Para ir
              </a></Link>
            </div>
            <div className="box">
              <i className="fab fa-angular"></i>
              <h3>Plantilla Contable</h3>
              <Link to={'/plantillaContable'} ><a  className="btn">
                Click Para ir
              </a></Link>
            </div>
            <div className="box">
              <i className="fab fa-angular"></i>
              <h3>Saldo Contable</h3>
              <Link to={'/saldoContable'} ><a  className="btn">
                Click Para ir
              </a></Link>
            </div>
            <div className="box">
              <i className="fab fa-angular"></i>
              <h3>Tipo Activo</h3>
              <Link to={'/tipoActivo'} ><a className="btn">
                Click Para ir
              </a></Link>
            </div>
            <div className="box">
              <i className="fab fa-angular"></i>
              <h3>Tipo Movimiento</h3>
              <Link to={'/tipoMovimientoLibroComprasVenta'} ><a  className="btn">
                Click Para ir
              </a></Link>
            </div>
          </div>
        </section>
      </body>
    </div>
    </div>
  );
};

export default UserHome;
