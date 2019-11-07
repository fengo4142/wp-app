
import { combineReducers } from 'redux';

import { authState, authReducer } from './auth.reducers'

interface IState {
  auth: authState;
}

const rootReducers = combineReducers<IState>({
    auth: authReducer,
});

export default rootReducers;