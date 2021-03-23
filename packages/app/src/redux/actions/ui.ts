import { IAction } from "../../types";

export const SHOW_SPINNER = "[ui] show spinner";
export const HIDE_SPINNER = "[ui] hide spinner";
export const ORDER_IN_PROGRESS = "[ui] Order in progress";
export const ORDER_COMPLETE = "[ui] Order complete";

export const showSpinner = (): IAction => ({
  type: SHOW_SPINNER,
});

export const hideSpinner = (): IAction => ({
  type: HIDE_SPINNER,
});

export const orderInProgress = (): IAction => ({
  type: ORDER_IN_PROGRESS,
});

export const orderComplete = (): IAction => ({
  type: ORDER_COMPLETE,
});
