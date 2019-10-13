import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import ServiceOrdersActions from '../ducks/serviceOrders';

export function* fetchServiceOrders() {
  try {
    const response = yield call(api.get, '/serviceorders');
    const resArr = Array.from(response.data);
    yield put(ServiceOrdersActions.fetchServiceOrdersSuccess(resArr));
  } catch (error) {
    console.log('fetch Orders failed');
  }
}
