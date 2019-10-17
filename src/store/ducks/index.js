import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as site } from './site';
import { reducer as user } from './user';
import { reducer as serviceOrders } from './serviceOrders';

export default combineReducers({
  auth,
  site,
  user,
  serviceOrders,
});
