import { Reducer } from "redux";
import { sharedActionType } from '../constants';

const initialState = {
  visible: true,
  minimized: false,
}

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case sharedActionType.DRAWER_OPENING:
      return {
        ...state,
        minimized: !state.minimized
      }
    default:
      return state;
  }
}

export default reducer;