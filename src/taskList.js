import React from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions/actions'
import { Button } from 'react-bootstrap';

class TaskList extends React.Component {

    alert() {
        let id = Math.max(...this.props.state.map(item => item.id)) + 1;
        this.props.onTaskAdd(id, 'fun');
    }

    render() {
        let tasks = this.props.state;
        console.log(tasks);

        return (
            <div>
                <Button onClick={this.alert.bind(this)} bsStyle="success">Add Task</Button>
                <table className="table .table-striped">
                    <thead>
                        <tr>
                            <th className="text-center">Task Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => {
                            return <tr className="text-center" key={task.id}><td>{task.name}</td></tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        onTaskAdd: (id, name) => {
            dispatch(addTask(id, name))
        }
    })
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
