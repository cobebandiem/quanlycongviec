import { createStore } from 'redux';
import * as actions from './actions/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);

console.log(store.getState());
store.dispatch(actions.sort({
    by:'name',
    value:111
}));
console.log(store.getState()); 
store.dispatch(actions.status());
console.log(store.getState());