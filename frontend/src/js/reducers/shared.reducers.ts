import { Reducer } from "redux";
import { sharedActionType } from '../constants';

const initialState = {
  visible: true,
  minimized: false,
  acitveItem: 'home',
}

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case sharedActionType.DRAWER_OPENING:
      return {
        ...state,       
        minimized: !state.minimized
      };
    case sharedActionType.ACTIVE_MENU:
      console.log(state)
      return {
        ...state,
        activeitem: action.activeItem
      }
    default:
      return state;
  }
}

export default reducer;