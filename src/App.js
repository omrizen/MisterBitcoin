import React, { Component } from 'react';

import { connect, } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';

import { uploadUser } from './store/actions';

import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage'
import ContactEditPage from './pages/ContactEditPage/ContactEditPage'
import SignupPage from './pages/SignupPage/SignupPage'
import UserMovesPage from './pages/UserMovesPage/UserMovesPage'
import UserService from './services/UserService'



import './App.css';
import './css/main.css'
import './css/helpers.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedinUser: false

    }
  }

  componentWillMount() {
    this.props.dispatch(uploadUser());
    this.isLoggedinUser = UserService.getUser();
  }

  render() {
    return (
      <div className="App container">
        <Router>
          <div>
            <header className="App-header">
              <nav className=" navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <NavLink exact to="/" className="header-tab" activeClassName="selected"> HomePage</NavLink>
                  <NavLink exact to="/contact" className="header-tab" activeClassName="selected">Contacts</NavLink>
                  <NavLink exact to="/move" className="header-tab" activeClassName="selected">Your Moves</NavLink>
                </div>
              </nav>
            </header>
            <div>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route path="/contact/edit/:id?" component={ContactEditPage} />
              <Route exact path="/contact/:id" component={ContactDetailsPage} />
              <Route exact path="/move" component={UserMovesPage} />
              <Route exact path="/signup" component={SignupPage} />
              {!this.isLoggedinUser && <Redirect to="/signup" />}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
// const mapActionToProps = (dispatch) => {
//   return bindActionCreators({
//     loadUser: loadUser
//   }, dispatch)
// };



// export default TodoApp;
export default connect(mapStateToProps)(App);




