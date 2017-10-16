import React, { Component } from 'react';
import Counter from './Counter'
import UserComponent from './UserComponent'
import Todo from './Todo'
import logo from './logo.svg';
import './App.css';

function App(props) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Counter />
         <UserComponent />
         <Todo />
        </div>
      </div>
    );
  }

export default App;
