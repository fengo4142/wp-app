
import { combineReducers } from 'redux';
import { LoginState, SharedState } from '../constants';
import authReducer from './auth.reducers';
import sharedReducer from './shared.reducers';

export interface RootState {
  auth: LoginState;
  shared: SharedState;
}

const rootReducers = combineReducers<RootState>({
    auth: authReducer,
    shared: sharedReducer
});

export default rootReducers;