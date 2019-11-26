  
export enum sharedActionType {
  DRAWER_OPENING = 'DRAWER_OPENING',
}

export interface SharedState {
  opened: boolean;
  visible: boolean;
}