import React,{Component} from 'react';
import * as actions from './../actions/index';
import {connect} from 'react-redux';
class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            status:false
        }
    }
    onCloseForm=()=>{
        this.props.onCloseForm();
    }
    onChange=(event)=>{
        var target=event.target;
        var name=target.name;
        var value=target.value;
        if(name==='status'){
            value=target.value==='true'?true:false;
        }
        this.setState({
            [name]:value
        });
    }
    onSubmit=(event)=>{
        event.preventDefault();
        if(this.state.id){
            this.props.onUpdateTask(this.state);
        }else{
            this.props.onAddTask(this.state);
        }
        this.onClear();
        this.onCloseForm();
    }
    onClear=()=>{
        this.setState({
            name:'',    
            status:false
        })
    }
    componentDidMount(){
        if(this.props.editingTask){
            this.setState({
                id:this.props.editingTask.id,
                name:this.props.editingTask.name,
                status:this.props.editingTask.status
            });
        }else{
            this.onClear();
        }

    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.editingTask){
            this.setState({
                id:nextProps.editingTask.id,
                name:nextProps.editingTask.name,
                status:nextProps.editingTask.status
            });
        }else{
            this.onClear();
        }
    }
  render(){
    var { id }=this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
            <h3 className="panel-title">
                { id!==''?'Cập Nhập Công Việc':'Thêm Công Việc' }
                <span onClick={this.onCloseForm} className="fa fa-times-circle text-right"></span>
            </h3>
        </div>
        <div className="panel-body">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Tên :</label>
                    <input name="name" type="text" className="form-control" value={this.state.name} onChange={this.onChange}/>
                </div>
                <label>Trạng Thái :</label>
                <select name="status" className="form-control" value={this.state.status} onChange={this.onChange}>
                    <option value={true}>Kích Hoạt</option>
                    <option value={false}>Ẩn</option>
                </select>
                <br/>
                <div className="text-center">
                    <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                    <button type="button" className="btn btn-danger" onClick={ this.onClear }>Hủy Bỏ</button>
                </div>
            </form>
        </div> 
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return {
        editingTask:state.editingTask
    }
}
const mapDispatchToProps=(dispatch, props)=>{
    return{ 
        onAddTask:(task)=>{
            dispatch(actions.addTask(task));
        },
        onCloseForm:()=>{
            dispatch(actions.closeForm());
        },
        onUpdateTask:(task)=>{
            dispatch(actions.updateTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
