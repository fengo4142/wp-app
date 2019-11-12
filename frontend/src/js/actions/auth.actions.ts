import { 
  LoginActionType,
  LoginRequestPayload,
  LoginRequestAction,
  LoginResponse,
  LoginSuccessAction,
  LoginErrorPayload,
  LoginErrorAction,
} from '../constants';

export const loginRequest = ({ email, password}: LoginRequestPayload): LoginRequestAction => {
  return { type: LoginActionType.LOGIN_REQUESTING, email, password, }
};

export const loginSuccess = ({ email, id }: LoginResponse): LoginSuccessAction => {
  return {
    type: LoginActionType.LOGIN_SUCCESS,
    email,
    id
  }
};

export const loginError = ({ error }: LoginErrorPayload): LoginErrorAction => {
  return {
    type: LoginActionType.LOGIN_ERROR,
    error
  }
}


