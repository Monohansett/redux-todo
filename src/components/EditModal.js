import React from "react";
import { Button, Input } from "@material-ui/core";
import { connect } from "react-redux";
import {
  toggleModalClose,
  changeActiveTitle,
  saveEditedTitle
} from "../js/actions/index";

const mapStateToProps = state => {
  return {
    isOpen: state.isOpenEditModal,
    activeEntityTitle: state.activeEntityTitle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModalClose: () => dispatch(toggleModalClose()),
    changeActiveTitle: title => dispatch(changeActiveTitle(title)),
    saveEditedTitle: () => dispatch(saveEditedTitle())
  };
};

const EditModal = ({
  isOpen,
  activeEntityTitle,
  toggleModalClose,
  changeActiveTitle,
  saveEditedTitle
}) =>
  isOpen ? (
    <div className="modalOverlay">
      <div className="modalBody">
        <h4 className="editTodoHeadline">Edit ToDo</h4>
        <Input
          type="text"
          margin="dense"
          placeholder="Enter new todo title"
          required
          value={activeEntityTitle}
          onChange={e => changeActiveTitle(e.target.value)}
        ></Input>
        <Button
          className="saveEditBtn"
          onClick={() => {
            saveEditedTitle();
            toggleModalClose();
          }}
        >
          Save
        </Button>
        <Button onClick={toggleModalClose}>Close</Button>
      </div>
    </div>
  ) : null;

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
