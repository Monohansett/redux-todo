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
  SAVE_EDITED_TITLE,
} from "../constants/action-types";

export function addCategory(payload) {
  return { type: ADD_CATEGORY, payload };
}

export function deleteCategory(payload) {
  return { type: DELETE_CATEGORY, payload };
}

export function setActiveCategory(payload) {
  return { type: SET_ACTIVE_CATEGORY, payload };
}

export function addTodo(payload) {
  return { type: ADD_TODO, payload };
}

export function toggleTodoStatus(payload) {
  return { type: TOGGLE_TODO_STATUS, payload };
}

export function toggleModalOpen() {
  return { type: TOGGLE_MODAL_OPEN };
}

export function toggleModalClose() {
  return { type: TOGGLE_MODAL_CLOSE };
}

export function setEditableEntity(payload) {
  return { type: SET_EDITABLE_ENTITY, payload };
}

export function changeActiveTitle(payload) {
  return { type: CHANGE_ACTIVE_TITLE, payload };
}

export function saveEditedTitle(payload) {
  return { type: SAVE_EDITED_TITLE, payload };
}
