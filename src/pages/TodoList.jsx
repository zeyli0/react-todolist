import { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";

class TodoList extends Component {
  // 当state和props数据发生变化时，render函数重新执行
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleLiDelete = this.handleLiDelete.bind(this);
  }

  // componentWillMount() {
  //   console.log("componentWillMount");
  // }

  render() {
    console.log("parent render");
    return (
      <Fragment>
        <div>
          {/* input框 */}
          <label htmlFor="id">输入内容</label>
          <input
            id="id"
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => {
              this.input = input;
            }}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul
          ref={(ul) => {
            this.ul = ul;
          }}
        >
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  // 组件被挂载到页面之后，自定被执行
  // 发送ajax请求
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("/api/todolist")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }

  // 组件被更新之后， 自定被执行
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // 当组件即将被移除时，会被自动执行
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <Fragment key={index}>
          <TodoItem
            content={item}
            index={index}
            deleteItem={this.handleLiDelete}
          />
          {/* <li
            key={index}
            onClick={this.handleLiDelete.bind(this, index)}
            dangerouslySetInnerHTML={{ __html: item }}
          ></li> */}
        </Fragment>
      );
    });
  }
  handleInputChange(e) {
    // const value = e.target.value;
    const value = this.input.value;
    this.setState(() => {
      return {
        inputValue: value,
      };
    });
    // this.setState({
    //   inputValue: e.target.value,
    // });
  }
  handleBtnClick() {
    // setState 异步函数
    this.setState(
      (prevState) => {
        return {
          list: [...prevState.list, prevState.inputValue],
          inputValue: "",
        };
      },
      () => {
        console.log(this.ul.querySelectorAll("li").length);
      }
    );
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: "",
    // });
  }
  handleLiDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list,
      };
    });

    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list: list,
    // });
  }
}

export default TodoList;
