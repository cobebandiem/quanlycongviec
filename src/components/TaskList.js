import React,{Component} from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component{
    constructor(props){
        super(props);
        this.state={
            filterName:'',
            filterStatus:-1//all:-1,active:1,deactive:0
        }
    }
    onChange=(event)=>{
        var target=event.target;
        var name=target.name;
        var value=target.value;
        // this.props.onFilter(
        //     name==='filterName'?value:this.state.filterName,
        //     name==='filterStatus'?value:this.state.filterStatus
        // );
        this.props.onFilterTable({
            name:name === 'filterName' ? value : this.state.filterName,
            status:name === 'filterStatus' ? parseInt(value): this.state.filterStatus
        });
        this.setState({
            [name]:value
        });
    }
  render(){
    var { tasks }=this.props;
    var { name,status}=this.props.filterTable;
    var {by,value}=this.props.sort;
    if(by==='name'){
      tasks=tasks.sort((a,b)=>{
        if(a.name > b.name)return value;
        else if(a.name < b.name)return -value;
        else return 0;
      });
    }else{
        tasks=tasks.sort((a,b)=>{
            if(a.status>b.status) return -value;
            else if(a.status<b.status) return value;
            else return 0;
        });
    }
    if(name){
        tasks=tasks.filter((item)=>{
            return item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
        })
    }
    if(status!==-1){
        tasks=tasks.filter((item)=>{
            return item.status===(status===1?true:false);
        })
    }
    var elmTasks=tasks.map((task,index)=>{
        return <TaskItem key={task.id} task={task} index={index}/>
    });
    return (
        <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover mt-15">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">T??n</th>
                            <th className="text-center">Tr???ng Th??i</th>
                            <th className="text-center">H??nh ?????ng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input name="filterName" type="text" className="form-control" value={name} onChange={this.onChange}/>
                            </td>
                            <td>
                                <select className="form-control" name="filterStatus" value={status} onChange={this.onChange}>
                                    <option value={-1}>T???t C???</option>
                                    <option value={0}>???n</option>
                                    <option value={1}>K??ch Ho???t</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        { elmTasks }
                    </tbody>
                </table>
            </div>
        </div>
    );
  }
}
const mapStateToProps=(state)=>{
    return {
        tasks:state.tasks,
        filterTable:state.filterTable,
        sort:state.sort
    }
};
const mapDispatchToProps=(dispatch,props)=>{
    return {
        onFilterTable:(filter)=>{
            dispatch(actions.filterTasks(filter))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
