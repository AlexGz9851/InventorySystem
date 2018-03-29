import React, { Component } from 'react'
import DashboardPage from './DashboardPage';

class DashboardPageController extends Component {
    render() {
        return (
            <DashboardPage />
        )
    }

    componentWillMount(){
        document.getElementsByTagName('body')[0].classList.add('fixed-nav', 'sticky-footer', 'bg-dark');
        document.getElementsByTagName('body')[0].id = "page-top";
    }

    componentWillUnmount(){
        document.getElementsByTagName('body')[0].classList.remove('fixed-nav', 'sticky-footer', 'bg-dark');
        document.getElementsByTagName('body')[0].id = "";
    }
}

export default DashboardPageController;