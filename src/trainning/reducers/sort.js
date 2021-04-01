import * as types from './../constants/ActionTypes';

var initialState={
    by:'',
    value:0
};

var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.SORT:{
            return action.sort
        } 
    }     
    return state;
}
export default myReducer;