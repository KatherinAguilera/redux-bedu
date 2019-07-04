import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Tabla from './Tabla';

import * as usuariosActions from '../../actions/usuariosActions';


class Usuarios extends Component {

componentDidMount() {
		// const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
		// this.setState({
		// 	usuarios: respuesta.data
		// });
		this.props.traerTodos();
	}
	// Spinner
	ponerContenido = () => {
		if (this.props.cargando) {
			return <Spinner />;
		}
		if (this.props.error) {
			return <Fatal mensaje={ this.props.error } />;
		}

		return <Tabla />
	};

render() {
	return (
		<div>
			<h1>Usuarios</h1>
			{ this.ponerContenido() }
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