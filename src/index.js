import React from "react";
import ReactDOM from "react-dom";
// import TodoList from "./TodoList";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
