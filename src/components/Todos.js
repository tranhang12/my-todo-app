import React, { Component } from 'react'
import TodoItem from './TodoItem'
class Todos extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        handleCheckbox={this.props.handleCheckbox}
                        deleteTodo={this.props.deleteTodo}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Todos