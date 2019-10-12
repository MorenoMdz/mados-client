import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { login } from '../../services/auth';

import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, '/sessions', { email, password });
    yield login(response.data.token);
    toast.success('Login Success');
    yield put(AuthActions.signInSuccess(response.data.token));
  } catch (error) {
    toast.warn('Login Failed');
    console.log('login failed');
  }
}
