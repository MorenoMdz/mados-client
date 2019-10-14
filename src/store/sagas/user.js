import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import UserActions from '../ducks/user';

export function* fetchUser() {
  try {
    const response = yield call(api.get, '/users/show');
    yield put(UserActions.fetchUserSuccess(response.data));
  } catch (error) {
    console.log('fetch user failed');
  }
}

export function* updateUser(data) {
  const { userId, avatarUrl } = data.updatedUser;
  try {
    const response = yield call(api.put, `/users/${userId}`, {
      avatar_url: avatarUrl,
    });
    console.log('update called', response.data);
    yield put(UserActions.updateUserSuccess(response.data));
  } catch (error) {
    console.log('fetch user failed');
  }
}
