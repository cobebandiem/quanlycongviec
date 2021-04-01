import React,{Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import {connect} from 'react-redux';
import * as actions from './actions/index';
class App extends Component{
    onToggleForm=()=>{
        if(this.props.taskEditing && this.props.taskEditing.id!==''){
            this.props.onOpenForm();
        }else{
            this.props.onToggleForm();
        }
        this.props.onClearTask({
            id:'',
            name:'',
            status:false
        });
    }
  render(){
    var { isDisplayForm }=this.props;
    var elmTaskForm=isDisplayForm?<TaskForm/>:'';
    return (
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className={isDisplayForm?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""}>
                { elmTaskForm }
            </div>
            <div className={isDisplayForm?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                <button type="button" onClick={this.onToggleForm} className="btn btn-primary">
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                <Control/>
                <TaskList/>
            </div>
        </div>
    </div>
    );
  }
}

var mapStateToProps =(state)=>{
    return {
        isDisplayForm:state.isDisplayForm,
        taskEditing:state.editingTask
    }
}
const mapDispatchToProps=(dispatch, props)=>{
    return{
        onToggleForm:()=>{
            dispatch(actions.toggleForm());
        },
        onClearTask:(task)=>{
            dispatch(actions.taskEditing(task));
        },
        onOpenForm:()=>{
            dispatch(actions.openForm());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
