const INITIAL_STATE = {
	usuarios: []
};
//aquí se crea la función, el estado inicial es un objeto vacío, y la acción es la //"tarea a realizar"
export default (state = INITIAL_STATE, action) => {
  //se crea el switch porque llegaran varias tareas y solo se distingue por el //nombre
	switch (action.type) {
    //la tarea que llegara en esta ocasión es 'traer_usuarios'
		case 'traer_usuarios':
      //esta parte es destructurar el estado que es un objeto curso de fundamentos //de JavaScripts muy bueno
			return { ...state, usuarios: action.payload };
//despues de todo eso de exporta el reducer y ya esta

    default: return state;
	};
};