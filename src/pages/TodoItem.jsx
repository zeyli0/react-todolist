import { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  // 当父组件render函数执行时，子组件的render重新执行一次
  constructor(props) {
    super(props);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  // 当组件要从父组件接收参数
  // 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
  // componentWillReceiveProps() {
  //   console.log("componentWillReceiveProps");
  // }

  // 组件被更新之前，他会自动执行
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
    // console.log("shouldComponentUpdate");
  }

  render() {
    const { content, test } = this.props;
    return (
      <li onClick={this.handleDeleteItem}>
        {test} - {content}
      </li>
    );
  }

  // 当组件即将被移除时，会被自动执行
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDeleteItem() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
};

TodoItem.defaultProps = {
  test: "hello",
};

export default TodoItem;
