import * as types from '../types';

export function paymentRequest(payload) {
  return {
    type: types.PAYMENT_REQUEST,
    payload,
  };
}

export function paymentSuccess(payload) {
  return {
    type: types.PAYMENT_SUCCESS,
    payload,
  };
}

export function paymentEnd(payload) {
  return {
    type: types.PAYMENT_END,
    payload,
  };
}
