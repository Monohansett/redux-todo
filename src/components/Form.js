import React, { Component } from "react";
import { ButtonGroup } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { addCategory } from "../js/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addCategory: category => dispatch(addCategory(category))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: new Date().getTime(),
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, title } = this.state;
    this.props.addCategory({ id, title });
    this.setState({
      title: "",
      id: new Date().getTime(),
      [e.target.id]: ""
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <ButtonGroup variant="contained" color="primary">
          <Input
            type="text"
            id="title"
            value={title.trim()}
            onChange={this.handleChange}
            margin="dense"
            placeholder="Add category"
            className="categoriesInput"
            required
          />
          <Button type="submit">Add</Button>
        </ButtonGroup>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
