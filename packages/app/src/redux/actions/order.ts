import { IActionNumber, IActionObject, IActionString } from "../../types";

export const CREATE_ORDER = "[order] Create";
export const UPDATE_ORDER = "[order] Update";
export const SUBMIT_ORDER = "[order] Complete order";

export const createOrder = (bookId: number): IActionNumber => ({
  type: CREATE_ORDER,
  payload: bookId,
});

export const updateOrder = (details: { number: number }): IActionObject => ({
  type: CREATE_ORDER,
  payload: details,
});

export const submitOrder = (email: string): IActionString => ({
  type: SUBMIT_ORDER,
  payload: email,
});
