import * as types from './../constants/ActionTypes';
export const listAll=()=>{
    return {
        type: types.LIST_ALL
    }
}
export const addTask=(task)=>{
    return {
        type:types.ADD_TASK,
        task
    }
}
export const toggleForm=()=>{
    return {
        type:types.TOGGLE_FORM
    }
}
export const closeForm=()=>{
    return {
        type:types.CLOSE_FORM
    }
}
export const openForm=()=>{
    return {
        type:types.OPEN_FORM
    }
}
export const toggleStatus=(id)=>{
    return {
        type:types.TOGGLE_STATUS,
        id
    }
}
export const deleteTask=(id)=>{
    return {
        type:types.DELETE_TASK,
        id
    }
}
export const updateTask=(task)=>{
    return {
        type:types.UPDATE_TASK,
        task
    }
}
export const taskEditing=(task)=>{
    return {
        type:types.EDIT_TASK,
        task
    }
}
export const filterTasks=(filter)=>{
    return{
        type:types.FILTER_TABLE,
        filter
    }
}
export const sortTasks=(sort)=>{
    return {
        type:types.SORT,
        sort
    }
}