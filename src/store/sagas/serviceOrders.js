import { call, put } from 'redux-saga/effects';
import { format, parse, parseISO, addMonths } from 'date-fns';
import api from '../../services/api';

import ServiceOrdersActions from '../ducks/serviceOrders';

export function* fetchServiceOrder({ id }) {
  try {
    const response = yield call(api.get, `/serviceorders/${id}`);
    const formatDate = date => {
      const parsedDate = parseISO(date);
      return format(parsedDate, 'dd/MM/yyyy');
    };

    const getWarrantyDate = date => {
      const parsedDate = parseISO(date);
      const fromNow = addMonths(parsedDate, 3);
      return format(fromNow, 'dd/MM/yyyy');
    };

    const splitDate = response.data.created_at.split('-');
    response.data.created_at = `${splitDate[2].split(' ')[0]}/${splitDate[1]}/${
      splitDate[0]
    }`;
    const expirationDate = getWarrantyDate(response.data.delivery_date);
    response.data.delivery_date = formatDate(response.data.delivery_date);
    response.data.payment_date = formatDate(response.data.payment_date);
    response.data.warranty_expiration = expirationDate;

    yield put(ServiceOrdersActions.fetchServiceOrderSuccess(response.data));
  } catch (error) {
    console.log('fetch Order failed');
  }
}

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
