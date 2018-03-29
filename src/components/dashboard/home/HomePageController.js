import React, { Component } from 'react'
import HomePage from './HomePage';

class HomePageController extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            table: {data:[], columns:[]}
        }
    }

    componentDidMount(){
        let data = [{
                classRoom: '6403',
                oldProjector: "87634363",
                newProjector: "12235759",
                date: "2011/04/25",
                technician: "Quinn Flynn"
            },{
                classRoom: '1244',
                oldProjector: "87564345",
                newProjector: "2452132",
                date: "2011/07/25",
                technician: "Haley Kennedy"
            },{
                classRoom: '5139',
                oldProjector: "867343",
                newProjector: "242745",
                date: "2009/01/12",
                technician: "Michael Silva"
            },{
                classRoom: '4410',
                oldProjector: "7985644365",
                newProjector: "12243435368",
                date: "2012/03/29",
                technician: "Paul Byrd"
            },{
                classRoom: '1304',
                oldProjector: "12234978",
                newProjector: "19653232",
                date: "2008/11/28",
                technician: "Gavin Joyce"
            },{
                classRoom: '1206',
                oldProjector: "2546446865",
                newProjector: "7735642153",
                date: "2012/12/02",
                technician: "Gloria Little"
            },{
                classRoom: '1103',
                oldProjector: "1246553",
                newProjector: "3576212",
                date: "2012/08/06",
                technician: "Bradley Greer"
            },{
                classRoom: '6302',
                oldProjector: "14346764",
                newProjector: "235421224",
                date: "2010/10/14",
                technician: "Angelica Ramos"
            },{
                classRoom: '5103',
                oldProjector: "2453647553",
                newProjector: "1453567532",
                date: "2009/09/15",
                technician: "Jenette Caldwell"
            },{
                classRoom: '6203',
                oldProjector: "1235365632",
                newProjector: "1899623440",
                date: "2008/12/13",
                technician: "Doris Wilder"
            },{
                classRoom: '5023',
                oldProjector: "1232687854",
                newProjector: "2786544474",
                date: "2008/12/19",
                technician: "Yuri Berry"
            },{
                classRoom: '4307',
                oldProjector: "234457674",
                newProjector: "463576708",
                date: "2008/12/19",
                technician: "Caesar Vance"
            },
        ];
        let columns = [{
            Header: 'Class Room',
            accessor: 'classRoom' 
            }, {
            Header: 'Old Projector',
            accessor: 'oldProjector'
            }, {
            Header: 'New Projector',
            accessor: 'newProjector' 
            }, {
            Header: 'Date',
            accessor: 'date'
            }, {
            Header: 'Technician',
            accessor: 'technician'
            }
        ];
        this.setState({table:{data, columns}});
    }
    render() {
        return (
            <HomePage table={this.state.table} />
        )
    }
}

export default HomePageController;