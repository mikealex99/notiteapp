import './index.scss';
import React, { Component } from 'react'
import List from './List'
import Form from './Form'


export default class App extends Component {
  state={
    data:[{todo:"scris"},
        {todo:"citit"},
        {todo:"muls vaci"},
        {todo:"facut urda"}]
};

  handleSubmit = (newValue)=>{
    this.setState({data:[...this.state.data,newValue]})
  }

  handleOnEdit = (editVal, index) =>{
    const {data}=this.state;
    data.forEach((item, i) =>{
      if(i === index){
        item.todo = editVal;
      }
    })
    this.setState({data: data})
  }
  
  handleRemove = index => {
    const {data}=this.state;
    this.setState({
      data : data.filter((item,i) => {
        return i !== index
      })
    })
}
  //local storage
  // ------------------------
  componentDidUpdate(){
    localStorage.setItem('dataStore', JSON.stringify(this.state.data));
  }

  componentDidMount(){
    const dataStore= JSON.parse(localStorage.getItem('dataStore'));
    if(dataStore !== null){
      this.setState({data: dataStore});
    }
  }
// ---------------------------
  render() {
    const {data}=this.state;
    return (
      <div className="app-container">
        <h1 className="app-header">TO DO LIST</h1>
        <div className="add-task">
          <Form onSubmit={this.handleSubmit} />
        </div>
        {data.length === 0 ? <h2 style={{color:"red"}}>Nu ai nimic de facut! </h2> : 
        <List todo={data}
          onDelete = {this.handleRemove}
          onEdit={this.handleOnEdit}
        />}
      </div>
    )
  }
}

