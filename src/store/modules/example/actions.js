import * as types from '../types';

export function cliqueRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function cliqueSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function cliqueFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
