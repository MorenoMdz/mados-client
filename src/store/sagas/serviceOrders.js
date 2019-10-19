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
export function* searchServiceOrders(data) {
  const { text, filterType, statusType } = data;
  try {
    let url;
    if (filterType === 'filter')
      url = `search?type=status&status=${statusType}status&value=`;
    if (filterType === 'search') url = 'search?type=raw&value=';
    const response = yield call(api.get, `${url}${text}`);
    const resArr = Array.from(response.data);
    yield put(ServiceOrdersActions.searchServiceOrdersSuccess(resArr));
  } catch (error) {
    console.log('search Orders failed');
  }
}
