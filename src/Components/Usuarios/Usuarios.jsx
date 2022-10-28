import React from "react";
import "./Usuarios.css";
import { Link } from "react-router-dom";
import { url } from "../axiosConnect";
import Axios from "axios";
import Swal from "sweetalert2";



const Register = () => {
  return (
    <div>
        <body className="perfilEmpresa">
        <div claclassNamess="container">
        <div className="mx-auto col-sm-8 main-section" id="myTab" role="tablist">
		<ul className="nav nav-tabs justify-content-end">
			<li className="nav-item">
			<Link to='/Register'><a className="nav-link active" id="list-tab" data-toggle="tab" role="tab" aria-controls="list" aria-selected="false">Regresar</a></Link>
			</li>
		</ul>
		<div className="tab-content" id="myTabContent">
			<div className="tab-pane fade show active" id="list" role="tabpanel" aria-labelledby="list-tab">
				<div className="card">
					<div className="card-header">
						<h4>Listado Empleados</h4>
					</div>
					<div className="card-body">
						<div className="table-responsive">
							<table id="userList" className="table table-bordered table-hover table-striped">
								<thead className="thead-light">
								<tr>
									<th >#</th>
									<th >Nombre</th>
									<th >Apellido</th>
									<th >Correo</th>
									<th >Usuario</th>
									<th >Contraseña</th>
									<th>Opciones</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<th>1</th>
									<td>Nombre</td>
									<td>Apellidos</td>
									<td>ejemplo@ejemplo.com</td>
									<td>User.Ejemplo</td>
									<td>******</td>
									<td>
										<a href="#"><i className="fas fa-edit"></i></a> | <a href="#"><i className="fas fa-user-times"></i></a> | <a href="#"><i className="fas fa-user"></i></a>
									</td>
								</tr>
								</tbody>
							</table>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
        </body>
    </div>

    )
};

export default Register;
