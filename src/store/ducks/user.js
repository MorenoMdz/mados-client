import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */
const { Types, Creators } = createActions({
  fetchUserRequest: ['email'],
  fetchUserSuccess: ['user'],
});

export const UserTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  username: '',
  email: '',
});

/* Reducers */

export const success = (state, { user }) => state.merge({ ...user });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_USER_SUCCESS]: success,
});
