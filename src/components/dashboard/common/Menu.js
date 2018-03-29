import React from 'react'

const Menu = () => {    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <a className="navbar-brand" href="dashboard.html">Inventory System</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                        <a className="nav-link" href="">
                            <i className="fa fa-fw fa-dashboard"></i>
                            <span className="nav-link-text">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Inventory">
                        <a className="nav-link" href="#">
                            <i className="fa fa-fw fa-area-chart"></i>
                            <span className="nav-link-text">Inventory</span>
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Locations">
                        <a className="nav-link" href="#">
                            <i className="fa fa-fw fa-table"></i>
                            <span className="nav-link-text">Locations</span>
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
                        <a className="nav-link "  href="#">
                            <i className="fa fa-fw fa-wrench"></i>
                            <span className="nav-link-text">Users</span>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav sidenav-toggler">
                    <li className="nav-item">
                        <a className="nav-link text-center" id="sidenavToggler">
                            <i className="fa fa-fw fa-angle-left"></i>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                            <i className="fa fa-fw fa-sign-out"></i>Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;