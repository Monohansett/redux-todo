import React, { Component } from "react";
import { connect } from "react-redux";
import { Checkbox, Box, Input } from "@material-ui/core";
import { saveSearchValue, showDone } from "../js/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    saveSearchValue: title => dispatch(saveSearchValue(title)),
    showDone: () => dispatch(showDone())
  };
};

class ConnectedSearchInput extends Component {
  render() {
    const { saveSearchValue, showDone } = this.props;
    return (
      <Box display="flex" alignItems="center">
        <Checkbox onClick={showDone} color="default"></Checkbox>
        <Box component="span" className="showDoneLabel">
          Show done
        </Box>
        <Input
          onChange={e => saveSearchValue(e.target.value)}
          margin="dense"
          placeholder="Search to-do..."
        ></Input>
      </Box>
    );
  }
}

const SearchInput = connect(null, mapDispatchToProps)(ConnectedSearchInput);

export default SearchInput;
