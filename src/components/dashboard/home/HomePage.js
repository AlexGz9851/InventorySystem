import React, { Component } from 'react'
import Card from '../common/Card';
import ImportantButton from '../common/ImportantButton';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import {Bar, Line, Pie} from 'react-chartjs-2';

import "react-table/react-table.css";

class HomePage extends Component {
    
    constructor(props, context){
        super(props,context);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <ImportantButton color="#0072ed" text="Hey, something" size={3} icon="comments"/>
                    <ImportantButton color="#ffc107" text="Another thing!" size={3} icon="list"/>
                    <ImportantButton color="#28a745" text="Look out!" size={3} icon="shopping-cart"/>
                    <ImportantButton color="#dc3545" text="Just kidding!" size={3} icon="support"/>
                </div>
      
                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fa fa-area-chart"></i> Units in Inventory
                    </div>
                    <div className="card-body">
                        <Line data={{
                                            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"],
                                            datasets: [
                                                {
                                                    label: "Sessions",
                                                    lineTension: 0.3,
                                                    backgroundColor:"rgba(218, 150, 87,0.3)",
                                                    borderColor:"rgba(218, 150, 87,1)",
                                                    pointRadius:5,pointBackgroundColor:"rgba(231, 128, 44,1)",
                                                    pointHitRadius: 20,
                                                    pointBorderWidth: 2,
                                                    data: [154, 289, 262, 218, 233, 228, 220, 214, 203, 233, 221, 189],
                                                }
                                            ]
                                        }
                                    }
                                options = {{
                                    scales: {
                                      xAxes: [{
                                        time: {
                                          unit: 'date'
                                        },
                                        gridLines: {
                                          display: false
                                        },
                                        ticks: {
                                          maxTicksLimit: 7
                                        }
                                      }],
                                      yAxes: [{
                                        ticks: {
                                          min: 0,
                                          max: 400,
                                          maxTicksLimit: 5
                                        },
                                        gridLines: {
                                          color: "rgba(0, 0, 0, .125)",
                                        }
                                      }],
                                    },
                                    legend: {
                                      display: false
                                    }
                                  }} height={50} />
                    </div>
                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
                <div className="row">
                    <Card col={8} date="Updated yesterday at 11:59 PM" title="Locations">
                        <div className="row">
                            <div className="col-sm-8 my-auto">
                                <Bar data={{
                                                labels:["Aulas 1","Aulas 2","Aulas 3","Aulas 4","Aulas 5","Aulas 6"],
                                                datasets:[{
                                                label:"Revenue",
                                                backgroundColor:"rgba(2,117,216,1)",
                                                borderColor:"rgba(2,117,216,1)",
                                                data:[34,53,25,41,21,18]
                                                }]
                                            }}
                                        options={{
                                              scales:{
                                                xAxes:[{
                                                  time:{
                                                    unit:""
                                                  },
                                                  gridLines: {
                                                    display: false
                                                  },
                                                  ticks: {
                                                    maxTicksLimit: 6
                                                  }
                                                }],
                                                yAxes: [{
                                                  ticks: {
                                                    min: 0,
                                                    max: 100,
                                                    maxTicksLimit: 5
                                                  },
                                                  gridLines: {
                                                    display: true
                                                  }
                                                }],
                                              },
                                              legend: {
                                                display: false
                                              }
                                            }}
                                    />
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
                        <Pie data={{
                                    labels: ["Decomposed Projectors", "Proyectors without Waranty", "Projectors with Waranty"],
                                    datasets: [{
                                        data: [ 34, 156, 47],
                                        backgroundColor: [ '#dc3545', '#ffc107', '#28a745']
                                    }]
                                }}/>
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