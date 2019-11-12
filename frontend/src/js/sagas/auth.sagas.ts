  
import { call, put, takeEvery, takeLatest, take, cancel, fork } from 'redux-saga/effects';
import { LoginActionType, LoginResponse, LoginRequestPayload, LoginErrorPayload } from '../constants'
import { loginRequest, loginSuccess, loginError } from "../actions";
import ApiUsers from '../api/auth.api';

export function* loginRequestSaga(payload: LoginRequestPayload) {
  try{
    const response = yield call(ApiUsers.login, payload);
    const user: LoginResponse = response.data;
    yield put({
          type: LoginActionType.LOGIN_SUCCESS,
          payload: user,
    });
  }
  catch(error) {   
    yield put(loginError({ error }));
  }
}

export function* watchLoginRequest() {
  while (true) {
    const request = yield take(LoginActionType.LOGIN_REQUESTING);
    const payload: LoginRequestPayload = request.data;
    const task = yield call(loginRequestSaga, payload)

    const action = yield take([LoginActionType.LOGOUT, LoginActionType.LOGIN_ERROR])
   
    if(action.type === LoginActionType.LOGOUT) {
      yield cancel(task)
    }
  }
}

export function* watchLoginSuccess() {
  yield take(LoginActionType.LOGIN_SUCCESS)
}

export function* watchLoginError() {
  yield take(LoginActionType.LOGIN_ERROR);
  console.log('DAMMIT - SHIT FAILED YO');
}


export default function * root () {
  yield fork(watchLoginRequest)
  yield fork(watchLoginSuccess)
  yield fork(watchLoginError)
}