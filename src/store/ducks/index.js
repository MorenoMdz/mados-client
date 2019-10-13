import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as user } from './user';
import { reducer as serviceOrders } from './serviceOrders';

export default combineReducers({
  auth,
  user,
  serviceOrders,
});
