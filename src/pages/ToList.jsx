import { Component, Fragment } from "react";
import store from "../store/index_1";
import {
  getInitList,
  getInputValueAction,
  getAddItemAction,
  getDeleteItemAction,
} from "../store/actionCreators";
import ToListUI from "./ToListUI";

class ToList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  componentDidMount() {
    // You should not use setState in the constructor since the component is not mounted yet.
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange); // 监听store的数据变化
    // ================
    // redux-thunk方式
    // const action = getTodoList();
    // store.dispatch(action);
    // ================
    // redux-saga方式
    const action = getInitList();
    store.dispatch(action);
  }

  render() {
    return (
      <Fragment>
        <ToListUI
          inputValue={this.state.inputValue}
          list={this.state.list}
          handleInputChange={this.handleInputChange}
          handleBtnClick={this.handleBtnClick}
          handleItemDelete={this.handleItemDelete}
        />
      </Fragment>
    );
  }

  handleInputChange(e) {
    const action = getInputValueAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    console.log(index);
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default ToList;
