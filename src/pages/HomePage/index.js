import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// MUI Components
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
// stripe
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// Util imports
import { makeStyles } from '@material-ui/core/styles';
import * as actions from '../../store/modules/modal/actions';
// Custom Components

import CardInput from '../../components/CardInput';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: '35vh auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
  },
  button: {
    margin: '2em auto 1em',
  },
});

function HomePage() {
  const dispatch = useDispatch();

  const classes = useStyles();
  // State
  const [email, setEmail] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const res = await axios.post('http://localhost:3000/stripe/payment', {
      email,
    });

    const clientSecret = res.data.client_secret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      // eslint-disable-next-line no-lonely-if
      if (result.paymentIntent.status === 'succeeded') {
        dispatch(actions.paymentSuccess());

        setTimeout(() => {
          dispatch(actions.paymentEnd());
        }, 3000);
      }
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <TextField
          label="Email"
          id="outlined-email-input"
          helperText={`Email you'll recive updates and receipts on`}
          margin="normal"
          variant="outlined"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <CardInput />
        <div className={classes.div}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
          >
            Pay
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Subscription
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default HomePage;
