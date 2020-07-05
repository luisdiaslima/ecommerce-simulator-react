import * as types from '../types';

const initialState = {
  isChecked: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.PAYMENT_REQUEST: {
      const newState = { ...state };

      newState.isChecked = false;
      return newState;
    }
    case types.PAYMENT_SUCCESS: {
      const newState = { ...state };
      newState.isChecked = true;

      return newState;
    }

    case types.PAYMENT_END: {
      const newState = { ...state };
      newState.isChecked = false;

      return newState;
    }

    default: {
      return state;
    }
  }
}
