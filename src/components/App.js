import React, { Component } from 'react';

class App extends Component {
  // state
	constructor() {
		super();
		this.state = {
			usuarios: [
				{
					nombre: 'Luna',
					correo: 'luna@platzi.com',
					enlace: 'luna.com'
				},
				{
					nombre: 'Haru',
					correo: 'haru@platzi.com',
					enlace: 'haru.com'
				},
				{
					nombre: 'Winny',
					correo: 'winny@platzi.com',
					enlace: 'winny.com'
				}
			]
		}
	}

	ponerFilas = () => this.state.usuarios.map((usuario) => (
		<tr>
			<td>
				{ usuario.nombre }
			</td>
			<td>
				{ usuario.correo }
			</td>
			<td>
				{ usuario.enlace }
			</td>
		</tr>
	));

	render() {
		return (
			<div className="margen">
				<table className="tabla">
					<thead>
						<th>
							Nombre
						</th>
						<th>
							Correo
						</th>
						<th>
							Enlace
						</th>
					</thead>
					<tbody>
						{ this.ponerFilas() }
					</tbody>
				</table>
			</div>
		)
	}
};

export default App;


// import React, { useState } from"react";

// const App = () => {
//   const [usuarios, setUsuarios] = useState([
//     { name: "Rodolfo", email: "Rodolfo@saldivar.com", enlace: "Rodolfo.com" },
//     { name: "Platzi", email: "platzi@platzi.com", enlace: "platzi.com" }
//   ]);

//   return (
//     <divclassName="margen">
//       <tableclassName="tabla">
//         <thead>
//           <tr>
//             <th>Nombre</th>
//             <th>Correo</th>
//             <th>Enlace</th>
//           </tr>
//         </thead>
//         <tbody>
//           {usuarios.map(item => (
//             <tr>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.enlace}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// exportdefault App;