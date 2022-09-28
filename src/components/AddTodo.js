import React from "react";
class AddTodo extends React.Component {
    state = {
        title: ""
    }

    onInputChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    addTodo = e => {
        e.preventDefault();
        if (this.state.title !== '') this.props.addTodo(this.state.title);

        this.setState({
          title: ""
        })
      }


  render() {
    return (
      <form 
      className="form-container"
      onSubmit={this.addTodo}>
        <input 
        type="text" 
        placeholder="Add todo..." 
        className="input-text" 
        value={this.state.title}
        onChange={this.onInputChange}
        />

        <input type="submit" value="Add" className="input-add" />
      </form>
    );
  }
}

export default AddTodo;
