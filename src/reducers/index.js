//reducers

/*
This reducer file takes in todos, and visibilityFilter via a combinedReducers method
from redux, seperated for clarity
*/

import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

//combine reducers using this clever method
const reducers = combineReducers({
  todos,
  visibilityFilter
})

export default reducers;