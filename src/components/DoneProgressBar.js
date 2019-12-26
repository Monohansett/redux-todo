import React, { Component } from "react";
import { connect } from "react-redux";

class ConnectedDoneProgressBar extends Component {
  constructor(props) {
    super(props);

    this.progressBar = React.createRef();

    this.handleProgress = this.handleProgress.bind(this);
  }

  componentDidUpdate() {
    this.handleProgress();
  }

  handleProgress() {
    const { todos, activeCategoryID } = this.props;
    const currentTodos = todos.filter(todo => {
      return todo.categoryID === activeCategoryID;
    });
    const doneTodos = todos.filter(todo => {
      return todo.categoryID === activeCategoryID && todo.isDone === true;
    });
    if (!doneTodos.length) {
      this.progressBar.current.style.width = 0 + "%";
    } else {
      this.progressBar.current.style.width =
        (doneTodos.length / currentTodos.length) * 100 + "%";
    }
  }
  render() {
    return (
      <div className="progressBarWrapper">
        <div className="progressBar" ref={this.progressBar}></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    activeCategoryID: state.activeCategoryID
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const DoneProgressBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedDoneProgressBar);

export default DoneProgressBar;
