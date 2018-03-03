import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoBox from './components/TodoBox'
import TodoList from './components/TodoList'


class App extends Component {
  
  constructor(){
    
    super();

    this.state = {
      todoItems:[]
    };
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(){
    let todoText = this.refs.todobox.getTodoBox();
    let newValue = this.state.todoItems.concat(todoText);
    this.setState({todoItems:newValue});

  }
  
  render() {
    return (
      <div className="App">
        
        <TodoBox enviar={this.onSubmit} ref="todobox"/>

        <TodoList lista={this.state.todoItems}/>

      </div>
    );
  }
}

export default App;