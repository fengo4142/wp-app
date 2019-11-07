import { all, fork } from 'redux-saga/effects';

import auth from './auth.sagas';

export default function* rootSaga(getState) {
  yield all([
    fork(auth),
  ]);
}
