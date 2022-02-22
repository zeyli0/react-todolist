import {
  GET_INIT_LIST,
  CHANGE_INPUT_VALUE,
  ADD_TODO_iTEM,
  DELETE_TOTO_ITEM,
  INIT_LIST_ACTION,
} from "./actionTypes";
import axios from "axios";

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

export const getTodoList = () => {
  // redux-thunk 使得返回一个函数
  // 否则 Actions must be plain objects. Instead, the actual type was: 'function'
  return (dispatch) => {
    axios
      .get("/list.json")
      .then((res) => {
        const data = res.data;
        const action = initListAction(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getInitList = () => ({
  type: GET_INIT_LIST,
});
