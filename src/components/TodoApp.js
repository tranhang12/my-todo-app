import React from "react";
import Header from "../components/layout/Header";
import Todos from "../components/Todos";

class TodoApp extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  handleCheckboxChange = id => {
    this.setState({
        todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
    })
  };

  deleteTodo = id => {
      this.setState({
          todos: [
              ...this.state.todos.filter(todo => {
                  return todo.id !== id;
              })
          ]
      })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Todos
          todos={this.state.todos}
          handleCheckbox={this.handleCheckboxChange}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default TodoApp;
