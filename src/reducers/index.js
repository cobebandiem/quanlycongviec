import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import editingTask from './editingTask';
import filterTable from './filterTable';
import sort from './sort';
var myReducer=combineReducers({
    tasks,
    isDisplayForm,
    editingTask,
    filterTable,
    sort
});

export default myReducer;