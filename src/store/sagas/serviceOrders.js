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
export function* searchServiceOrders({ filter }) {
  try {
    // const response = yield call(api.get, '/serviceorders');
    const response = yield call(
      api.get,
      `search?type=status&status=diagstatus&value=${filter}`
    );
    const resArr = Array.from(response.data);
    console.log('search saga', filter);
    console.log('results saga', resArr);
    yield put(ServiceOrdersActions.searchServiceOrdersSuccess(resArr));
  } catch (error) {
    console.log('search Orders failed');
  }
}
