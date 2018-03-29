/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import LandingPage from './landing/LandingPage';
import LoginPage from './login/LoginPage';
import DashboardPageController from './dashboard/DashboardPageController';
//import HomePage from './HomePage';


//import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    
    return (
      <Switch>
        {/*
<Redirect from="/awthurs" to="/authors"/>
                        <Redirect from="/about-us" to="/about"/>

                        <Route exact path='/' component={HomePage}/>
                        <Route path="/authors" component={AuthorPage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Route path="/author/:id" component={ManageAuthorPage}/>
                        <Route path="/author" component={ManageAuthorPage}/>
                        
                        <Route component={NotFoundPage}/>

*/}
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/dashboard' component={DashboardPageController} />
      </Switch>
      
    );
  }
}

App.propTypes = {
//  children: PropTypes.element
};

export default App;


