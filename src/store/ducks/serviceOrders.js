import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  fetchServiceOrderRequest: ['id'],
  fetchServiceOrderSuccess: ['data'],
  fetchServiceOrdersRequest: null,
  fetchServiceOrdersSuccess: ['data'],
  searchServiceOrdersRequest: ['text', 'filterType', 'statusType'],
  searchServiceOrdersSuccess: ['data'],
});

export const ServiceOrdersTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({ data: [], order: {} });

/* Reducers */

export const success = (state, { data }) => {
  return state.merge({ data });
};
export const successSingle = (state, { data }) => {
  return state.merge({ order: data });
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_SERVICE_ORDER_SUCCESS]: successSingle,
  [Types.FETCH_SERVICE_ORDERS_SUCCESS]: success,
  [Types.SEARCH_SERVICE_ORDERS_SUCCESS]: success,
});
