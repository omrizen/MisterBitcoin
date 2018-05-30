import React, { Component } from 'react';
import logo from './logo.svg';

import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage'
import ContactEditPage from './pages/ContactEditPage/ContactEditPage'
import { 
  BrowserRouter as Router ,
   Route
   } from 'react-router-dom';

import './App.css';
import './css/main.css'
import './css/helpers.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <Router>
          <div>
            <Route  exact path="/" component={HomePage} /> 
            <Route exact path="/contact" component={ContactPage} /> 
            <Route exact path="/contact/:id" component={ContactDetailsPage} /> 
            <Route exact path="/contact/edit/:id" component={ContactEditPage} /> 
          </div>
        </Router>
        <div>
          {/* <ContactPage/> */}

        </div>
      </div>
    );
  }
}

export default App;
