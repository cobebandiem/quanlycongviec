import {TOGGLE_FORM,CLOSE_FORM,OPEN_FORM} from './../constants/ActionTypes';
var initialState=false;
var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case TOGGLE_FORM:{
            return !state;
        }
        case CLOSE_FORM:{
            return false;
        }
        case OPEN_FORM:{
            return true;
        }
    }
    return state;
}
export default myReducer;