import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Register = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
  return (
    <div>
        <body className="perfilEmpresa">
        <div claclassNamess="container">
        <div className="mx-auto col-sm-8 main-section" id="myTab" role="tablist">
		<ul className="nav nav-tabs justify-content-end">
			<li className="nav-item">
			<Link to='/AdminHome'><a className="nav-link active" id="list-tab" data-toggle="tab"  role="tab" aria-controls="list" aria-selected="false">Regresar</a></Link>
			</li>
			<li className="nav-item">
			<Link to='/RegisterCompany'><a className="nav-link active" id="list-tab" data-toggle="tab"  role="tab" aria-controls="list" aria-selected="false">Ingresar Nueva Empresa</a></Link>
			</li>
		</ul>
		<div className="tab-content" id="myTabContent">
			<div className="tab-pane fade show active" id="list" role="tabpanel" aria-labelledby="list-tab">
				<div className="card">
					<div className="card-header">
						<h4>Listado Empresas</h4>
					</div>
		<div>
		<Modal
		  id="register"
		  open={open}
		  onClose={handleClose}
		  aria-labelledby="modal-modal-title"
		  aria-describedby="modal-modal-description"
		>
		  <Box sx={style}>
		  <form action="">
		  <label>Nombre</label>
			<input type="text" placeholder="Nombre"></input>
			<label>Apellido</label>
			<input type="text" placeholder="Apellido"></input>
			<label>E-mail</label>
			<input type="email" placeholder="E-Mail"></input>
			<label>Usuario</label>
			<input type="text" placeholder="Usuario"></input>
			<label>Contraseña</label>
			<input type="password" placeholder="Contraseña"></input>
			<a href="/register" class="button">Aceptar</a>
		</form>
		  </Box>
		</Modal>
	  </div>
					
					<div className="card-body">
						<div className="table-responsive">
							<table id="userList" className="table table-bordered table-hover table-striped">
								<thead className="thead-light">
								<tr>
									<th >#</th>
									<th >Nombre Empresa</th>
									<th >Nombre Comercial</th>
									<th >Direcciòn Empresa</th>
									<th >NIT Empresa</th>
									<th >Porcentaje IVA</th>
									<th>Opciones</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<th>1</th>
									<td> <Link to='/usuarios'> <a>Empresa Ejemplo</a></Link></td>
									<td>Empresa Ejemplo</td>
									<td>Direcciòn</td>
									<td>12345678</td>
									<td>15%</td>
									<td>
										
									<Button onClick={handleOpen}><i className="fas fa-edit"></i></Button> | <a href="#"><i className="fas fa-user-times"></i></a> |  		<Button onClick={handleOpen}><i className="fas fa-user"></i></Button>
									</td>
								</tr>
								</tbody>
							</table>
						</div>
						<div class="bg-modal">
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
