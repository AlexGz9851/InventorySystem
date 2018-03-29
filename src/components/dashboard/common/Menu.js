import React from 'react'
import FontAwesome from 'react-fontawesome';
import MenuItem from './MenuItem';

const Menu = () => {    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <a className="navbar-brand" href="dashboard.html">Inventory System</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                    <MenuItem title="Dashboard" text="Dashboard" link="" icon="dashboard"/>
                    <MenuItem title="Inventory" text="Inventory" link="" icon="area-chart"/>
                    <MenuItem title="Locations" text="Locations" link="" icon="table"/>
                    <MenuItem title="Components" text="Components" link="" icon="wrench"/>
                </ul>
                <ul className="navbar-nav sidenav-toggler">
                    <li className="nav-item">
                        <a className="nav-link text-center" id="sidenavToggler">
                            <FontAwesome name="angle-left"/>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                            <FontAwesome name="sign-out"/>&nbsp;Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;