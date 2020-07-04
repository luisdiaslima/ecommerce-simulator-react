import * as types from '../types';

const initialState = {
  isChecked: false,
  inPayment: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.PAYMENT_REQUEST: {
      const newState = { ...state };
      newState.inPayment = true;
      newState.isChecked = false;
      return newState;
    }
    case types.PAYMENT_SUCCESS: {
      const newState = { ...state };
      newState.inPayment = false;
      newState.isChecked = true;
      return newState;
    }

    case types.PAYMENT_END: {
      const newState = { ...state };
      newState.inPayment = false;
      newState.isChecked = false;
      return newState;
    }

    default: {
      return state;
    }
  }
}
