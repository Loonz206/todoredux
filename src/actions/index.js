//actions

/*
Actions fire reducers which then update store, which is immutable but keeps track of changes
Redux should be used for global changes otherwise feel free to use component state for toggles,
things that are not needed for global state
*/

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}