import { Reducer } from "redux";
import { LoginAction, LoginActionType, LoginState } from "../constants";

const initialState: LoginState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: []
}

const reducer: Reducer<LoginState, LoginAction> = (state:LoginState = initialState, action: LoginAction) => {
  switch (action.type) {
    case LoginActionType.LOGIN_REQUESTING:
      return {
        ...state,
        requesting: true,
        //messages: [{body: 'Logging in...', time: new Date() }],
        messages: []
      };
    case LoginActionType.LOGIN_SUCCESS:
      return {
        ...state,
        successful: true,
      }
    case LoginActionType.LOGIN_ERROR:
      return {
        ...state,
        // errors: state.errors.concat([{
        //   body: action.error.toString(),
        //   time: new Date(),
        // }]),
        errors: []
      }
    default:
      return state;
  }
};

export default reducer;