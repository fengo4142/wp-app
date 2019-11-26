import { 
  LoginActionType,
  LoginRequestPayload,
  LoginRequestAction,
  LoginResponse,
  LoginSuccessAction,
  LoginErrorPayload,
  LoginErrorAction,
} from '../constants';

export const loginRequest = ({ username_or_email, password}: LoginRequestPayload): LoginRequestAction => {
  return { type: LoginActionType.LOGIN_REQUESTING, username_or_email, password, }
};

export const loginSuccess = ({ token, user }: LoginResponse): LoginSuccessAction => {
  return { type: LoginActionType.LOGIN_SUCCESS, token, user }
};

export const loginError = ({ error }: LoginErrorPayload): LoginErrorAction => {
  return { type: LoginActionType.LOGIN_ERROR, error }
}
