import { all, takeLatest } from 'redux-saga/effects';

import { signIn } from './auth';
import { fetchUser, updateUser } from './user';
import { fetchServiceOrders } from './serviceOrders';

import { AuthTypes } from '../ducks/auth';
import { UserTypes } from '../ducks/user';
import { ServiceOrdersTypes } from '../ducks/serviceOrders';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(UserTypes.FETCH_USER_REQUEST, fetchUser),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, updateUser),
    takeLatest(
      ServiceOrdersTypes.FETCH_SERVICE_ORDERS_REQUEST,
      fetchServiceOrders
    ),
  ]);
}
