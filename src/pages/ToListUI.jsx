// import { Component } from "react";
import { Button, Input, List } from "antd";
import "antd/dist/antd.min.css";
import DragList from "./DragList";

const ToListUI = (props) => {
  return (
    <div>
      <div style={{ marign: "20px" }}>
        项目
        <DragList />
      </div>
      <Input
        value={props.inputValue}
        placeholder="todo list"
        style={{ width: 300 }}
        onChange={props.handleInputChange}
      />
      <Button
        type="primary"
        style={{ marginLeft: "10px" }}
        onClick={props.handleBtnClick}
      >
        提交
      </Button>
      <List
        style={{ width: 300, marginTop: 10 }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handleItemDelete(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

// class ToListUI extends Component {
//   render() {
//     return (
//       <div>
//         <Input
//           value={this.props.inputValue}
//           placeholder="todo list"
//           style={{ width: 300 }}
//           onChange={this.props.handleInputChange}
//         />
//         <Button
//           type="primary"
//           style={{ marginLeft: "10px" }}
//           onClick={this.props.handleBtnClick}
//         >
//           提交
//         </Button>
//         <List
//           style={{ width: 300, marginTop: 10 }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               onClick={() => {
//                 this.props.handleItemDelete(index);
//               }}
//             >
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }

export default ToListUI;
