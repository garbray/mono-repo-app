export interface Book {
  id?: number;
  title: string;
  description: string;
}

interface IMetaRequest {
  method: string;
  url: string;
  onSuccess: () => void;
  onResponse: () => void | unknown;
}

export interface IApiRequest {
  method: string;
  url: string;
  body?: Record<string, unknown>;
  onSuccess?: () => void;
  onError?: () => void;
}

export interface IApiAction {
  type: string;
  payload?: Record<string, unknown>;
  meta?: IMetaRequest;
}

export interface IAction<T = string> {
  type: T;
}

export interface ActionWithPayload<IType extends string, IPayload>
  extends IAction<IType> {
  payload: IPayload;
}

export type IActionNumber = ActionWithPayload<string, number>;
export type IActionString = ActionWithPayload<string, string>;
export type IActionObject = ActionWithPayload<string, Record<string, unknown>>;
