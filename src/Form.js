import React, { Component } from 'react'

export default class Form extends Component {
    inputValue={
        todo:''
    }
    state=this.inputValue;

    handleInput = (e)=>{
        const {name, value}= e.target;
        this.setState({
            [name]:value
        })
    }
    handleSubmit= (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState(this.inputValue);
    }

    render() {
        const {todo}=this.state;
        return (
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="todo" value={todo} onChange={this.handleInput} placeholder="Task nou" id="todo" className="task-input" required />
            <button type="submit" value="" className="submit-task" title="Add Task" />
        </form>
        )
    }
}

