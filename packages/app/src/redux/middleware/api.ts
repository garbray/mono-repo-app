import { Action, Dispatch } from "redux";
import { IApiAction } from "../../types";
import { API_REQUEST } from "../actions/api";

type INext = (action: IApiAction) => void;

export const api = ({ dispatch }: { dispatch: Dispatch }) => (
  next: (action: Action) => void
) => (action: IApiAction): INext => {
  if (action.type === API_REQUEST) {
    const { method, url, onSuccess, onError } = action.meta;

    fetch(url, { method })
      .then((response) => response.json())
      .then((data) => dispatch({ type: onSuccess, payload: data }))
      .catch((error) => dispatch({ type: onError, payload: error }));
  }

  return next(action);
};
