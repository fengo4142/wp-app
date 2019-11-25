import { sharedActionType } from '../constants';

export const drawerOpening = () => {
  return { type: sharedActionType.DRAWER_OPENING };
};

export const activeMenu = ({ activeItem }) => {
  return { type: sharedActionType.ACTIVE_MENU, activeItem };
}

