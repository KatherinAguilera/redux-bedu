import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';


class Usuarios extends Component {

async componentDidMount() {
		// const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
		// this.setState({
		// 	usuarios: respuesta.data
		// });
		this.props.traerTodos();
	}

ponerFilas = () => this.props.usuarios.map((usuario) => (
		<tr key={ usuario.id }>
			<td>
				{ usuario.name }
			</td>
			<td>
				{ usuario.email }
			</td>
			<td>
				{ usuario.website }
			</td>
		</tr>
	));

 	render() {
		console.log(this.props);
		return (
			<div>
				<table className="tabla">
					<thead>
						<tr>
							<th>
								Nombre
							</th>
							<th>
								Correo
							</th>
							<th>
								Enlace
							</th>
						</tr>
					</thead>
					<tbody>
						{ this.ponerFilas() }
					</tbody>
				</table>
			</div>
		)
	}
};
// Mapea el estado de redux a los props del componente llamando a los reducers que te interesen usar, en este caso para mi fue usersReducer
const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer;
};
// Exporta tu componente usando el método connect para tenerlo conectado a los reducers y actions de Redux.
export default connect(mapStateToProps, usuariosActions)(Usuarios);