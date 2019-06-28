import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Usuarios from './usuarios';

const Prueba = () => <div>hola</div>

const App = (props) => (
	<BrowserRouter>
		<Menu />
		<div id="margen">
    <Switch>
			<Route exact path='/' component={Usuarios} />
			<Route exact path='/tareas' component={Prueba} />
    </Switch>
		</div>
	</BrowserRouter>
);

export default App;