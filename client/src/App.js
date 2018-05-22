import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import SpecificCityPage from './components/SpecificCityPage'
import SpecificPost from './components/SpecificPost'

class App extends Component {

  render() {

    return (

      <Router>
        <Switch>
          <div>
            <Navbar>
              <h1>Vagabond</h1>
            </Navbar>


            <Route exact path="/" component={HomePage} />
            <Route exact path="/cities/:id" component={SpecificCityPage} />
            <Route exact path="/cities/:cityId/posts/:postId" component={SpecificPost} />

          </div>

        </Switch>
      </Router>
    );
  }
}

export default App;
