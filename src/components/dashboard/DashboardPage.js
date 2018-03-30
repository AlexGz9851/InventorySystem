import React, { Component } from 'react'
import Menu  from './common/Menu';
import Footer from './common/Footer';
import HomePageController from './home/HomePageController';
import { Switch, Route } from 'react-router-dom';

class DashboardPage extends Component {
    render() {
        return (
            <div className="content-wrapper" id='dashboard'>
                <div className="container-fluid">
                    <Menu/>
                    <Switch>
                        <Route to='/dashboard' component={HomePageController}/>
                        <Route to='/dashboard/adios' component={()=>(<h1>Adios</h1>)}/>
                    </Switch>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default DashboardPage;