import React, { Component } from "react";
import EditModal from "./EditModal";
import { connect } from "react-redux";
import { Checkbox, Box, Button, Typography } from "@material-ui/core";
import {
  toggleTodoStatus,
  toggleModalOpen,
  setActiveTodo
} from "../js/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    toggleTodoStatus: todo => dispatch(toggleTodoStatus(todo)),
    toggleModalOpen: () => dispatch(toggleModalOpen()),
    setActiveTodo: (id, title) => dispatch(setActiveTodo(id, title))
  };
}

function mapStateToProps(state) {
  return { activeCategoryID: state.activeCategoryID, todos: state.todos };
}

class ConnectedListTodos extends Component {
  constructor(props) {
    super(props);

    this.handleTodoStatus = this.handleTodoStatus.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleActiveTodo = this.handleActiveTodo.bind(this);
  }
  handleTodoStatus(todo) {
    const { toggleTodoStatus } = this.props;
    return function() {
      toggleTodoStatus(todo);
    };
  }
  handleOpenModal() {
    this.props.toggleModalOpen();
  }

  handleActiveTodo(id, title) {
    this.props.setActiveTodo({ id, title });
  }
  render() {
    const { activeCategoryID, todos } = this.props;
    const filteredTodos = todos.filter(
      todo => todo.categoryID === activeCategoryID
    );

    return (
      <div>
        {activeCategoryID === null ? (
          <Box display="flex">
            <Typography className="noActiveCategoryHeadline">
              There is no active category. Please, choose one.
            </Typography>
          </Box>
        ) : !filteredTodos.length && activeCategoryID ? (
          <Box display="flex">
            <Typography className="noActiveCategoryHeadline">
              There is no todos yet.
            </Typography>
          </Box>
        ) : (
          <>
            {filteredTodos.map(todo => (
              <div className="todoList" key={todo.todoID}>
                <Box>
                  <Checkbox
                    onClick={this.handleTodoStatus(todo)}
                    color="default"
                    checked={todo.isDone}
                  ></Checkbox>
                  <Typography className="todoTitle">
                    {todo.todoTitle}
                  </Typography>
                </Box>
                <Button
                  onClick={() => {
                    this.handleActiveTodo(todo.todoID, todo.todoTitle);
                    this.handleOpenModal();
                  }}
                  color="default"
                >
                  EDIT
                </Button>
              </div>
            ))}
          </>
        )}
        <EditModal></EditModal>
      </div>
    );
  }
}

const ListTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedListTodos);

export default ListTodos;
