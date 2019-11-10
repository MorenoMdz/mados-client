import { call, put } from 'redux-saga/effects';
import { format, parseISO, addMonths } from 'date-fns';
import api from '../../services/api';

import ServiceOrdersActions from '../ducks/serviceOrders';

function handleDates(response) {
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
  // console.log('splitDate', splitDate);
  const expirationDate = getWarrantyDate(response.data.delivery_date);
  if (response.data.delivery_date) {
    response.data.delivery_date = formatDate(response.data.delivery_date);
    response.data.warranty_expiration = expirationDate;
  }
  if (response.data.payment_date)
    response.data.payment_date = formatDate(response.data.payment_date);

  return response.data;
}

export function* fetchServiceOrder({ id }) {
  try {
    const response = yield call(api.get, `/serviceorders/${id}`);
    const serviceOrder = handleDates(response);
    // console.log('serviceOrder', serviceOrder);
    yield put(ServiceOrdersActions.fetchServiceOrderSuccess(serviceOrder));
  } catch (error) {
    console.log('fetch Single Order failed');
  }
}

export function* updateServiceOrder({
  data: { statusId, statusType, orderId },
}) {
  try {
    if (statusType === 'diag_status') {
      yield call(api.put, `/serviceorders/${orderId}`, {
        diag_status_id: statusId,
      });
      const response = yield call(api.get, `/serviceorders/${orderId}`);
      const serviceOrder = handleDates(response);
      yield put(ServiceOrdersActions.updateServiceOrderSuccess(serviceOrder));
    }
  } catch (error) {
    console.log('error');
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
