import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  TaskList  from './taskList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TaskList />
      </div>
    );
  }
}

export default App;
