import React from "react";
import {v4 as uuid} from "uuid";
import Header from "../components/layout/Header";
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";

class TodoApp extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Setup development environment",
        completed: true,
      },
      {
        id: uuid(),
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: uuid(),
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  handleCheckboxChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
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
