import React, { Component } from "react";
import { connect } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
  deleteCategory,
  setActiveCategory,
  setEditableEntity,
  toggleModalOpen
} from "../js/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    deleteCategory: category => {
      dispatch(deleteCategory(category.id));
    },
    setActiveCategory: id => {
      dispatch(setActiveCategory(id));
    },
    setEditableEntity: (id, title) => {
      dispatch(setEditableEntity(id, title));
    },
    toggleModalOpen: () => dispatch(toggleModalOpen())
  };
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    activeCategoryID: state.activeCategoryID
  };
}

class ConnectedList extends Component {
  constructor(props) {
    super(props);

    this.toggleDeleteTodo = this.toggleDeleteTodo.bind(this);
    this.handleActiveCategory = this.handleActiveCategory.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleEditableEntity = this.handleEditableEntity.bind(this);
  }

  toggleDeleteTodo(category) {
    const { deleteCategory } = this.props;
    return function() {
      deleteCategory(category);
    };
  }

  handleOpenModal() {
    this.props.toggleModalOpen();
  }

  handleActiveCategory(id) {
    this.props.setActiveCategory(id);
  }

  handleEditableEntity(categoryID, categoryTitle) {
    this.props.setEditableEntity({ categoryID, categoryTitle });
  }

  render() {
    const { categories, activeCategoryID } = this.props;
    return (
      <div className="categoryList">
        {!categories.length ? (
          <div>There is no categories. Please, add one.</div>
        ) : (
          <div>
            {categories.map(category => (
              <div key={category.id}>
                <div
                  className={
                    category.id === activeCategoryID
                      ? "categoryGroupActive"
                      : "categoryGroup"
                  }
                  onClick={() => this.handleActiveCategory(category.id)}
                >
                  {category.title}
                </div>
                <div className="deleteCategoryBtn">
                  <DeleteIcon
                    type="button"
                    onClick={this.toggleDeleteTodo(category)}
                  />
                  <EditIcon
                    onClick={() => {
                      this.handleEditableEntity(category.id, category.title);
                      this.handleOpenModal();
                    }}
                  ></EditIcon>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const ListCategory = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
export default ListCategory;
