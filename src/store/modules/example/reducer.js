import * as types from '../types';

const initialState = {
  buttonClicked: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.buttonClicked = !newState.buttonClicked;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Error :(');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requesição');
      return state;
    }

    default: {
      return state;
    }
  }
}
