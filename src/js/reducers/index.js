import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  SET_ACTIVE_CATEGORY,
  ADD_TODO,
  TOGGLE_TODO_STATUS,
  TOGGLE_MODAL_OPEN,
  TOGGLE_MODAL_CLOSE,
  SET_EDITABLE_ENTITY,
  CHANGE_ACTIVE_TITLE,
  SAVE_EDITED_TITLE
} from "../constants/action-types";

const initialState = {
  todos: [],
  activeCategoryID: null,
  categories: [],
  isOpenEditModal: false,
  activeEntityID: null,
  activeEntityTitle: ""
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY: {
      return { ...state, categories: [...state.categories, action.payload] };
    }
    case DELETE_CATEGORY: {
      const categories = state.categories.filter(
        category => category.id !== action.payload
      );
      const todos = state.todos.filter(
        todo => todo.categoryID !== action.payload
      );
      return {
        ...state,
        activeCategoryID: null,
        categories,
        todos
      };
    }
    case SET_ACTIVE_CATEGORY: {
      return { ...state, activeCategoryID: action.payload };
    }
    case ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case TOGGLE_TODO_STATUS: {
      const todos = state.todos.map(item => {
        if (item.todoID !== action.payload.todoID) {
          return item;
        }
        return {
          ...item,
          isDone: !item.isDone
        };
      });
      return { ...state, todos };
    }
    case SET_EDITABLE_ENTITY: {
      if (action.payload.categoryID) {
        return {
          ...state,
          activeEntityID: action.payload.categoryID,
          activeEntityTitle: action.payload.categoryTitle
        };
      } else {
        return {
          ...state,
          activeEntityID: action.payload.id,
          activeEntityTitle: action.payload.title
        };
      }
    }
    case CHANGE_ACTIVE_TITLE: {
      // console.log(action.payload);
      return {
        ...state,
        activeEntityTitle: action.payload
      };
    }
    case SAVE_EDITED_TITLE: {
      // console.log(action.payload);
      const todos = state.todos.map(todo => {
        if (todo.todoID !== state.activeEntityID) {
          return todo;
        }
        return {
          ...todo,
          todoTitle: state.activeEntityTitle
        };
      });
      const categories = state.categories.map(category => {
        if (category.id !== state.activeEntityID) {
          return category;
        }
        return {
          ...category,
          title: state.activeEntityTitle
        };
      });
      return {
        ...state,
        todos,
        categories
      };
    }
    case TOGGLE_MODAL_OPEN: {
      return {
        ...state,
        isOpenEditModal: true
      };
    }
    case TOGGLE_MODAL_CLOSE: {
      return {
        ...state,
        isOpenEditModal: false
      };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
