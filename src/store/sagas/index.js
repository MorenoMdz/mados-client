import { all, takeLatest } from 'redux-saga/effects';

import { signIn } from './auth';
import { siteUpdate } from './site';
import { fetchUser, updateUser } from './user';
import {
  fetchServiceOrder,
  fetchServiceOrders,
  searchServiceOrders,
  updateServiceOrder,
} from './serviceOrders';

import { AuthTypes } from '../ducks/auth';
import { SiteTypes } from '../ducks/site';
import { UserTypes } from '../ducks/user';
import { ServiceOrdersTypes } from '../ducks/serviceOrders';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(SiteTypes.SITE_UPDATE_REQUEST, siteUpdate),
    takeLatest(UserTypes.FETCH_USER_REQUEST, fetchUser),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, updateUser),
    takeLatest(
      ServiceOrdersTypes.FETCH_SERVICE_ORDER_REQUEST,
      fetchServiceOrder
    ),
    takeLatest(
      ServiceOrdersTypes.UPDATE_SERVICE_ORDER_REQUEST,
      updateServiceOrder
    ),
    takeLatest(
      ServiceOrdersTypes.FETCH_SERVICE_ORDERS_REQUEST,
      fetchServiceOrders
    ),
    takeLatest(
      ServiceOrdersTypes.SEARCH_SERVICE_ORDERS_REQUEST,
      searchServiceOrders
    ),
  ]);
}
