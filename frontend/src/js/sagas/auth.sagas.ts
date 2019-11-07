  
import { call, put, takeEvery } from 'redux-saga/effects';
import { generateNewNumber } from '../api';
import { authRequestCompletedAction } from '../actions';
import { actionIds } from '../common';

export default function* watchNewGeneratedNumberRequestStart() {
  yield takeEvery(
    actionIds.GET_NUMBER_REQUEST_START,
    requestNewGeneratedNumber
  );
}

function* requestNewGeneratedNumber() {
  const generatedNumber = yield call(generateNewNumber);
  yield put(authRequestCompletedAction(generatedNumber));
}