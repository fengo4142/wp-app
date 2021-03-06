// Redux types
declare interface Action<T extends string> {
  type: T;
}

declare type ActionWithPayload<T extends string, P> = Action<T> & P;

// Auth types
declare interface Token {
  userId: string;
}

declare interface Message {
  time: Date;
  body: string;
}
declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}