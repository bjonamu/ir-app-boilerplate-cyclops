import { takeLatest, all } from 'redux-saga/effects';
import API from 'services/api';
/* ------------- Types ------------- */

import { StartupTypes } from 'store/startup-redux';
import { LoginTypes } from 'store/login-redux';

/* ------------- Sagas ------------- */

import { startup } from './startup-sagas';
import { login, logout } from './login-sagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // Login
    takeLatest(LoginTypes.LOGIN_REQUEST, login, api.login),
    takeLatest(LoginTypes.LOGOUT_REQUEST, logout, api.logout)
  ]);
}
