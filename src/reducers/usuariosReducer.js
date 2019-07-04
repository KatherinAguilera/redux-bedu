import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usuariosTypes';

const INITIAL_STATE = {
	usuarios: [],
	cargando: false,
	error: ''
};
//aquí se crea la función, el estado inicial es un objeto vacío, y la acción es la //"tarea a realizar"
export default (state = INITIAL_STATE, action) => {
  //se crea el switch porque llegaran varias tareas y solo se distingue por el //nombre
	switch (action.type) {
    //la tarea que llegara en esta ocasión es 'traer_usuarios'
		case TRAER_TODOS:
      //esta parte es destructurar el estado que es un objeto curso de fundamentos //de JavaScripts muy bueno
			return {
				...state,
				usuarios: action.payload,
				cargando: false,
				error: ''
			};
		case CARGANDO:
			return { ...state, cargando: true };

		case ERROR:
			return { ...state, error: action.payload, cargando: false };
//despues de todo eso de exporta el reducer y ya esta

    default: return state;
	};
};