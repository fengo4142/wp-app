// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { call, put, takeLatest, takeEvery, take, cancel, fork } from 'redux-saga/effects';
import { LoginActionType, LoginResponse, LoginRequestPayload } from '../constants'
import { loginError } from "../actions";
import AuthService from '../services/auth.service';

export function* loginRequestSaga(payload: LoginRequestPayload) {
  try{
    const response = yield call(AuthService.login, payload);
    const data: LoginResponse = response.data;
    yield put({ type: LoginActionType.LOGIN_SUCCESS, payload: data });
  }
  catch(error) {
    yield put(loginError({ error }));
  }
}

export function* callLoginRequest(request) {

  //const request = yield take(LoginActionType.LOGIN_REQUESTING);
  const username_or_email = request.username_or_email;
  const password = request.password;
  const payload: LoginRequestPayload = { username_or_email, password };
  const task = yield call(loginRequestSaga, payload)

  const action = yield take([LoginActionType.LOGOUT, LoginActionType.LOGIN_ERROR])
  
  if(action.type === LoginActionType.LOGOUT) {
    yield cancel(task)
  }
}

export function* callLoginSuccess(request) {
  const { token } = request.payload;
  yield call(AuthService.loggedIn, token);
  console.log('SUCCESS')
}

export function* callLoginError() {
  console.log('DAMMIT - SHIT FAILED YO');
}

export function* callLogout() {
  yield call(AuthService.logout);
}

export default function * root () {
  yield takeLatest(LoginActionType.LOGIN_ERROR, callLoginError);
  yield takeLatest(LoginActionType.LOGIN_SUCCESS, callLoginSuccess);
  yield takeLatest(LoginActionType.LOGIN_REQUESTING, callLoginRequest);
  yield takeLatest(LoginActionType.LOGOUT, callLogout)
}