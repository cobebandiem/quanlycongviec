import * as types from './../constants/ActionTypes';
var initialState={
    name:'',
    status:-1
};

var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.FILTER_TABLE:{
            return action.filter
        }
    }
    return {...state};
}
export default myReducer;