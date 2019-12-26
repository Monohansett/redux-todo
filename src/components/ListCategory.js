import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { deleteCategory } from "../js/actions/index";
import { setActiveCategory } from "../js/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    deleteCategory: category => {
      dispatch(deleteCategory(category.id));
    },
    setActiveCategory: id => {
      dispatch(setActiveCategory(id));
    }
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
  }

  toggleDeleteTodo(category) {
    const { deleteCategory } = this.props;
    return function() {
      deleteCategory(category);
    };
  }

  handleActiveCategory(id) {
    this.props.setActiveCategory(id);
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
              <>
                <div
                  key={category.id}
                  className={
                    category.id === activeCategoryID
                      ? "categoryGroupActive"
                      : "categoryGroup"
                  }
                  onClick={() => this.handleActiveCategory(category.id)}
                >
                  {category.title}
                </div>
                <Button
                  type="button"
                  onClick={this.toggleDeleteTodo(category)}
                  className="deleteCategoryBtn"
                >
                  delete
                </Button>
              </>
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
