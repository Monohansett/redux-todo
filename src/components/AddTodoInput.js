import React, { Component } from "react";
import { connect } from "react-redux";
import { ButtonGroup } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { addTodo } from "../js/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todoID, todoTitle, activeCategory, isDone) =>
      dispatch(addTodo(todoID, todoTitle, activeCategory, isDone))
  };
}

function mapStateToProps(state) {
  return { categoryID: state.activeCategoryID };
}

class ConnectedAddTodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoID: new Date().getTime(),
      todoTitle: "",
      isDone: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { todoTitle, todoID, isDone } = this.state;
    const { categoryID } = this.props;
    this.props.addTodo({ todoID, categoryID, todoTitle, isDone });
    this.setState({
      [e.target.id]: e.target.value,
      todoTitle: "",
      todoID: new Date().getTime()
    });
  }

  render() {
    const { todoTitle } = this.state;
    const { categoryID } = this.props;
    const disabled = true;
    return (
      <form onSubmit={this.handleSubmit}>
        <ButtonGroup variant="contained" color="secondary">
          <Input
            type="text"
            id="todoTitle"
            value={todoTitle}
            onChange={this.handleChange}
            margin="dense"
            placeholder="Add To-Do"
            required
          ></Input>
          <Button type="submit" disabled={categoryID ? false : disabled}>
            ADD
          </Button>
        </ButtonGroup>
      </form>
    );
  }
}

const AddTodoInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedAddTodoInput);

export default AddTodoInput;
