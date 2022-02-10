const { Component, Fragment } = require("react");

class DragList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ allowMove: true, name: "颤三" }],
    };
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
  }
  render() {
    return (
      <Fragment>
        <ul>
          {this.state.list.forEach((item) => {
            <li
              draggable={item.allowMove ? true : false}
              onDragStart={(e) => this.handleDragStart(e, item)}
              onDragEnd={this.handleDragEnd}
            >
              {item.name}
            </li>;
          })}
        </ul>
        {/* // 自定义拖动图像 */}
        <div style={{ display: "none" }} className="gl-draggable-preview">
          图片
        </div>
      </Fragment>
    );
  }
  handleDragStart() {}

  handleDragEnd(e) {
    console.log(e);
  }
}

export default DragList;
