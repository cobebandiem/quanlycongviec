import {LIST_ALL,ADD_TASK,TOGGLE_STATUS,DELETE_TASK,UPDATE_TASK} from './../constants/ActionTypes';
var data=JSON.parse(localStorage.getItem('tasks'));
var initialState=data?data:[];
var s4=()=>{
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
}
var generateID=()=>{
    return s4()+s4()+'-'+s4()+s4()+'-'+s4()+s4()+'-'+s4()+s4()+'-'+s4()+s4()+s4()+s4()+'-'+s4()+s4()+s4()+s4()+'-'+s4()+s4();
}
var findIndexID=(id,state)=>{
    let index=state.findIndex((item)=>item.id===id);
    return index;
}
var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case LIST_ALL:{
            return state;
        }
        case ADD_TASK:{
            var newTask={
                id:generateID(),
                name:action.task.name,
                status:action.task.status
            }
            state.push(newTask);
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        }
        case TOGGLE_STATUS:{
            const index=findIndexID(action.id,state);
            state[index]={...state[index],status:!state[index].status};
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        }
        case UPDATE_TASK:{
            console.log(action);
            const index=findIndexID(action.task.id,state);
            state[index]={...state[index],name:action.task.name,status:action.task.status};
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        }
        case DELETE_TASK:{
            const index=findIndexID(action.id,state);
            state.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        }
    }
    return state;
}
export default myReducer;