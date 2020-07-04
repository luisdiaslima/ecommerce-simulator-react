import React from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from '../../services/axios';
import HomePage from '../HomePage';

const stripePromise = loadStripe(process.env.REACT_APP_KEY);

export default function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <HomePage />
    </Elements>
  );
}
