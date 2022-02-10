import { Component, createRef, Fragment } from "react";
// import { CSSTransition } from "react-transition-group";
import "./App.css";
import ToList from "./pages/ToList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };

    this.wrapper = createRef();
    this.nodeRef = null;
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div className={this.state.show ? "show" : "hidden"}>hello</div>
        {/* <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          nodeRef={this.wrapper}
          onEnter={(el) => {
            el.style.color = "green";
          }}
        >
          <div>hello</div>
        </CSSTransition> */}
        <button onClick={this.handleClick}>切换</button>

        <ToList />
      </Fragment>
    );
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        show: prevState.show ? false : true,
      };
    });
  }
}

export default App;
