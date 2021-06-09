import React, { Component } from 'react'

export default class ListItem extends Component {

    state = {
        onEdit: false,
        editVal: this.props.item
    }
    handleEditValue = (e) =>{
        const {name, value}= e.target;
        this.setState({
            [name]:value
        })
    };

    onEdit = () => {
        this.setState({onEdit:true})
    }

    myRef=React.createRef();
    onRemove = () =>{
        console.log(this.myRef)
        setTimeout(() => {
            this.props.handleDelete();
        }, 200);
    }

    handleCancel=()=>{
        this.setState({onEdit:false})
    }

    handleSave = () => {
        const {editVal} = this.state;
        if(editVal === ''){
            this.setState({editVal: this.props.item})
        }else{
            this.props.handleEdit(editVal, this.props.id)
        }
        this.setState({onEdit:false})
    }

    render() {
        const {item}=this.props;
        if(this.state.onEdit){
            return(
            <li className="task-list-item" v-for="task in tasks">
            <label className="task-list-item-label">
                <input type="text" 
                name="editVal" 
                value={this.state.editVal} 
                onChange={this.handleEditValue}/>
                
            </label>
            <span className="save-btn" title="Salveaza" onClick={this.handleSave}></span>
            <span className="cancel-btn" title="Anuleaza" onClick={this.handleCancel}></span>   
        </li>
            )
        }else{
            return (
                <li className="task-list-item" v-for="task in tasks">
                    <label className="task-list-item-label">
                        <input type="checkbox" /><span ref={this.myRef}>{item}</span>
                    </label>
                    <span className="edit-btn" title="Editeaza" onClick={this.onEdit}></span>
                    <span className="delete-btn" title="Sterge" onClick={this.onRemove}></span>   
                </li>
            )
        }
        
    }
}

