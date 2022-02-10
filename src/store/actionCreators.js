import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_iTEM,
  DELETE_TOTO_ITEM,
  INIT_LIST_ACTION,
} from "./actionTypes";

export const getInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddItemAction = () => ({
  type: ADD_TODO_iTEM,
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TOTO_ITEM,
  index,
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data,
});
