import React, { Component } from 'react'
import ListItem from './ListItem'


export default class List extends Component {

    render() {
        const {todo, onDelete, onEdit}=this.props;
        return (
            
            <ul className="task-list">
                {
                    todo.map((item,index)=>{
                        return <ListItem 
                        item={item.todo} 
                        key={index}
                        handleDelete = {() => {onDelete(index)}}
                        handleEdit={onEdit}
                        id={index}
                        />
                    })
                }             
            </ul>
         
        )
    }
}
