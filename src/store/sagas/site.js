import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import SiteActions from '../ducks/site';

export function* siteUpdate(data) {
  try {
    yield put(SiteActions.siteUpdateSuccess(data.site));
  } catch (error) {
    toast.warn('Site Update Failed');
  }
}
