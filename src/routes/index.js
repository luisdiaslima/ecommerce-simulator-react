import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import Shop from '../pages/Shopping';
import Products from '../pages/Products';

export default function Routes() {
  toast('Bem-Vindo');

  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/shop" component={Shop} />
      <MyRoute exact path="/products" component={Products} />
    </Switch>
  );
}
