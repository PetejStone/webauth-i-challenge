import React from 'react';

import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/Login';
import Users from './components/Users';
//import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/users" component={Users} />
    </div>
  );
}

export default App;