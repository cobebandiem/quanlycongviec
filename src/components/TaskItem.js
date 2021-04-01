import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class TaskItem extends Component{
    onUpdateStatus=()=>{
        this.props.onToggleStatus(this.props.task.id);
    }
    onDelete=()=>{
        this.props.onDelete(this.props.task.id);
    }
    onUpdate=()=>{
        this.props.onOpenForm();
        this.props.onEditingTaks(this.props.task);
    }
  render(){
    var { task, index }=this.props;
    return (
        <tr>
            <td>{ index + 1 }</td>
            <td>{ task.name }</td>
            <td className="text-center">
                <span 
                    className={task.status===true?'label label-danger':'label label-success'} 
                    onClick={this.onUpdateStatus}
                >
                    { task.status===true?'Kích Hoạt':'Ẩn' }
                </span>
            </td>
            <td className="text-center">
                <button onClick={this.onUpdate} type="button" className="btn btn-warning">
                    <span className="fa fa-pencil mr-5"></span>&nbsp;Sửa
                </button>
                &nbsp;
                <button onClick={this.onDelete} type="button" className="btn btn-danger">
                    <span className="fa fa-trash mr-5"></span>&nbsp;Xóa
                </button>
            </td>
        </tr>
    );
  }
}
var mapStateToProps =(state)=>{
    return {
    }
}
const mapDispatchToProps=(dispatch, props)=>{
    return{
        onToggleStatus:(id)=>{
            dispatch(actions.toggleStatus(id));
        },
        onDelete:(id)=>{
            dispatch(actions.deleteTask(id));
        },
        onEditingTaks:(task)=>{
            dispatch(actions.taskEditing(task));
        },
        onOpenForm:()=>{
            dispatch(actions.openForm());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);
