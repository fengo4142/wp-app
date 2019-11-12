
import { combineReducers } from 'redux';
import { LoginState, LoginAction } from '../constants'
import authReducer from './auth.reducers'

export interface RootState {
  auth: LoginState;
}

const rootReducers = combineReducers<RootState>({
    auth: authReducer,
});

export default rootReducers;