import React, { Component } from 'react'
import Card from '../common/Card';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import "react-table/react-table.css";

class HomePage extends Component {
    
    constructor(props, context){
        super(props,context);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-primary o-hidden h-100" >
                            <div className="card-body">
                                <div className="card-body-icon">
                                    <i className="fa fa-fw fa-comments"></i>
                                </div>
                                <div className="mr-5">26 New Messages!</div>
                            </div>
                            <a className="card-footer text-white clearfix small z-1" href="#">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-warning o-hidden h-100" >
                            <div className="card-body">
                                <div className="card-body-icon">
                                    <i className="fa fa-fw fa-list"></i>
                                </div>
                                <div className="mr-5">11 New Tasks!</div>
                            </div>
                            <a className="card-footer text-white clearfix small z-1" href="#">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-success o-hidden h-100" >
                            <div className="card-body">
                                <div className="card-body-icon">
                                    <i className="fa fa-fw fa-shopping-cart"></i>
                                </div>
                                <div className="mr-5">123 New Orders!</div>
                            </div>
                            <a className="card-footer text-white clearfix small z-1" href="#">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-danger o-hidden h-100" >
                            <div className="card-body">
                                <div className="card-body-icon">
                                    <i className="fa fa-fw fa-support"></i>
                                </div>
                                <div className="mr-5">13 New Tickets!</div>
                            </div>
                            <a className="card-footer text-white clearfix small z-1" href="#">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>  
                </div>
      
                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fa fa-area-chart"></i> Units in Inventory
                    </div>
                    <div className="card-body">
                        <canvas id="myAreaChart" width="100%" height="30"></canvas>
                    </div>
                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
                <div className="row">
                    <Card col={8} date="Updated yesterday at 11:59 PM" title="Locations">
                        <div className="row">
                            <div className="col-sm-8 my-auto">
                                <canvas id="myBarChart" width="100" height="50"></canvas>
                            </div>
                            <div className="col-sm-4 text-center my-auto">
                                <div className="h4 mb-0 text-primary">33</div>
                                <div className="small text-muted">New Projectors</div>
                                <hr/>
                                <div className="h4 mb-0 text-warning">184</div>
                                <div className="small text-muted">Demised Projectors</div>
                                <hr/>
                                <div className="h4 mb-0 text-success">324</div>
                                <div className="small text-muted">Total Projectors</div>
                            </div>
                        </div>
                    </Card>
                    <Card col={4} title={"Projector's State"} date="Updated yesterday at 11:59 PM" ico="fa fa-pie-chart">
                        <canvas id="myPieChart" width="100%" height="100"></canvas>
                    </Card>
                    <div className="saltoDePagina"></div>
                    <Card col={12} title={"Inventory History"} date="Updated yesterday at 11:59 PM" ico="fa fa-table">
                        <div className="table-responsive">
                            <ReactTable
                                data={this.props.table.data}
                                columns={this.props.table.columns}
                                defaultPageSize={10}
                                className="-striped -highlight"
                            />
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    table: PropTypes.object.isRequired
};

export default HomePage;