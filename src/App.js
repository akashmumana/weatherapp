
import './App.css';
import Nav from './Component/nav'
import Home from './Component/home';
import Weather from './Component/weather';
import {Route ,BrowserRouter as Router,Routes,  } from 'react-router-dom';

import React, { Component } from 'react'


export default class App extends Component {
  render() {
    return (
      <div class="App">
        <Router>
          <Nav></Nav>
          <Routes> 
              <Route path="/" element={<Home></Home>}> </Route>
              <Route path="/weather" element={<Weather></Weather> }> </Route>
          </Routes>
        </Router>
        
      </div>
    )
  }
}
