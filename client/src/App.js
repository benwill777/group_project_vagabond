import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import SpecificCityPage from './components/SpecificCityPage'




class App extends Component {

  render() {

    return (

      <Router>
        <div>
          <Navbar>
            <h1>Vagabond</h1>
          </Navbar>


          <Route exact path="/" component={HomePage} />
          <Route exact path="/cities/:id" component={SpecificCityPage} />



        </div>

      </Router>
    );
  }
}

export default App;
