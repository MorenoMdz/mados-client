import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  siteUpdateRequest: ['site'],
  siteUpdateSuccess: ['site'],
});

export const SiteTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({ sideBarExpanded: false });

/* Reducers */

export const success = (state, { site }) => {
  return state.merge({ ...site });
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SITE_UPDATE_SUCCESS]: success,
});
