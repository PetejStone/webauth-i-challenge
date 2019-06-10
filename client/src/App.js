import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/Login';
//import PrivateRoute from "./PrivateRoute";



function App() {
  
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
     
    </div>
  );
}

export default App;