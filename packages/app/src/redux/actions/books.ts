import { IAction, IActionNumber, IActionObject } from "../../types";

export const GET_BOOKS = "[books] GET";
export const FETCH_BOOKS_SUCCESS = "[books] Fetch success";
export const FETCH_BOOKS_ERROR = "[books] Fetch success";
export const UPDATE_BOOKS = "[books] Update";
export const SELECT_BOOK = "[books] Select";

export const getBooks = (): IAction => ({
  type: GET_BOOKS,
});

export const updateBooks = (data: { name: string }): IActionObject => ({
  type: UPDATE_BOOKS,
  payload: data,
});

export const selectBook = (bookId: number): IActionNumber => ({
  type: SELECT_BOOK,
  payload: bookId,
});
