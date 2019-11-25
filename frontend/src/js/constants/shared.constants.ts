  
export enum sharedActionType {
  DRAWER_OPENING = 'DRAWER_OPENING',
  ACTIVE_MENU = 'ACTIVE_MENU',
}

export interface SharedState {
  opened: boolean;
  visible: boolean;
  activeItem: string;
}