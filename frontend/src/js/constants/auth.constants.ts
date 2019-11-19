  
export enum LoginActionType {
  LOGIN_REQUESTING = 'LOGIN_REQUESTING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGIN_EXISTING = 'LOGIN_EXISTING',
  LOGOUT = 'LOGOUT',
}

export interface LoginResponse {
  token: string;
  user: object;
}

export interface LoginRequestPayload {
  username_or_email: string;   // username or email
  password: string;
}

export interface LoginErrorPayload {
  error: Error;
}

export type LoginRequestAction = ActionWithPayload<LoginActionType.LOGIN_REQUESTING, LoginRequestPayload>;
export type LoginSuccessAction = ActionWithPayload<LoginActionType.LOGIN_SUCCESS, LoginResponse>;
export type LoginErrorAction = ActionWithPayload<LoginActionType.LOGIN_ERROR, LoginErrorPayload>;

export type LoginAction = LoginRequestAction | LoginSuccessAction | LoginErrorAction ;

export interface LoginState {
  requesting: boolean;
  successful: boolean;
  messages: [];
  errors: [];
}