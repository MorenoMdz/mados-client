import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  fetchServiceOrdersRequest: null,
  fetchServiceOrdersSuccess: ['data'],
});

export const ServiceOrdersTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({ data: [] });

/* Reducers */

export const fetchSuccess = (state, { data }) => {
  return state.merge({ data });
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_SERVICE_ORDERS_SUCCESS]: fetchSuccess,
});
