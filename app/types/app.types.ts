export type ActionType<T> = { type: string; payload: T };

export type Nullable<T> = T | null;

export type CallbackFunction = (evt: Event) => void;
