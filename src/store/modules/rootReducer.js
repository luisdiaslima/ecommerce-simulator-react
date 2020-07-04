import { combineReducers } from 'redux';

import auth from './auth/reducer';
import modal from './modal/reducer';

export default combineReducers({
  auth,
  modal,
});
