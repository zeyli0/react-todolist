import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_iTEM,
  DELETE_TOTO_ITEM,
  INIT_LIST_ACTION,
} from "./actionTypes";

const defualtState = {
  inputValue: "",
  list: [],
};
// reducer 可以接收state，但是绝不能修改state
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = defualtState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  if (action.type === ADD_TODO_iTEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_TOTO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};
