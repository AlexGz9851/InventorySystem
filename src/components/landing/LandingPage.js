import React from 'react'
import {
    Link
} from 'react-router-dom'

class LandingPage extends React.Component{
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(){
        const pageYOffset = window.pageYOffset;
        const navbar = document.querySelector('.navbar');
        if(pageYOffset==0){
            navbar.classList.remove("bg-light");
        } else{
            navbar.classList.add("bg-light")
        }
    }

    render(){
        return(
            <div id="landingPage">
                <header>
                    <div className='background'></div>
                    <div className='content align-middle'>
                        <h1>Inventory System</h1>
                        <p>A system for the IT department to get the record of all devices of an organization.</p>
                        <Link to="/login">
                        <button type='button' className='btn btn-outline-warning btn-xlarge' id='enterBtn'>Enter</button>
                        </Link>
                    </div>
                </header>
                <nav className="navbar sticky-top navbar-expand-lg navbar-light white-text">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#generalContext">Project Context</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#userAnalysis">User Analysis</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#requirements">Requirements list</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#conclusions">Study Conclusions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#extra">Extra information</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-warning my-2 my-sm-0" type="button" id='print' onClick={()=>{window.print();}}>Print Project info</button>
                        </form>
                    </div>
                </nav>
                <div id="generalContext">
                    <div className='container' >
                        <div className='row'>
                            <div className='col-xl-12 text-center'>
                                <h2>Project Context</h2>
                                <hr/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-12'>
                                <h3><strong>Client</strong>: Alejandro Villicaña Professor</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-12'>
                                <div className='card-deck'>
                                    <div className="card" style={{width:18+'rem'}}>
                                        <div className="card-body">
                                            <h3 className="card-title">General context</h3>
                                            <p className="card-text"> The IT area under supervision of our client has to implement an inventory of the technological infrastructure under the supervision of our client. The institutions under his control are Guadalajara´s, Santa Anita´s and Colima´s campus. The inventory is made by hand and annually.</p>
                                        </div>
                                    </div>
                                    <div className="card" style={{width:18+'rem'}}>
                                        <div className="card-body">
                                            <h3 className="card-title">Problem</h3>
                                            <p className="card-text"> The work of inventory tends to be a tedious activity, in which is not easily accessible update information about the devices they have, their state or end of warrant date. This process is slow, and it tends to end with an incorrect final work because of the loss of information in the process.</p>
                                        </div>
                                    </div>
                                    <div className="card" style={{width:18+'rem'}}>
                                        <div className="card-body">
                                            <h3 className="card-title">Goal</h3>
                                            <p className="card-text"> Develop a system for the register, control, and query of costs, warrants, location and problems of the inventory.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="userAnalysis">
                    <div className='container' >
                        <div className='row'>
                            <div className='col-xl-12 text-center'>
                                <h2>User Analysis</h2>
                                <hr/>
                            </div>
                            <p>
                                <strong>Final user</strong>: Alejandro Villicaña Professor and his tech team.
                            </p>
                            <p>
                                <strong>User profile</strong>: This user use computers and technology on a daily basis. They work on an ITESM campus as technicians. So we can conclude that our final user is an avid user of technology.
                            </p>
                            <h3>User scenarios:</h3>
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                                    <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">Not our client or his team</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>The curious user, the one that arrives to the website by accident, can see the content of the landing page. He would not have access to another part of the system.</p>
                                    </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card"></i></div>
                                    <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">The team of Villicaña Professor</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>The tech specialized on the technological installation, once identified on the log-in, would have access to the inventory control page.</p>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-badge success"><i className="glyphicon glyphicon-credit-card"></i></div>
                                    <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">Professor Villicaña</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Besides the same habilities as his team, he would access to the user control site.</p>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id='requirements'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 text-center'>
                                <h2>Requirements list</h2>
                                <hr/>
                            </div>
                            <div className='col-xl-12 text-center'>
                                <ul className="list-group">
                                    <li className="list-group-item">Landing page with the project information</li>
                                    <li className="list-group-item">@media implementation in a part of the project for printing</li>
                                    <li className="list-group-item">Graphic, easy to use, dynamic dashboard</li>
                                    <li className="list-group-item">Inventory control system</li>
                                    <li className="list-group-item">User Control System</li>
                                    <li className="list-group-item">User that can have access to the inventory control system</li>
                                    <li className="list-group-item">Administrator user who has access also to user control</li>
                                    <li className="list-group-item">An UI for the change of inventory on an specific location</li>
                                    <li className='list-group-item'>An inventory changes log</li>
                                    <li className="list-group-item">Low learning curve</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='conclusions'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 text-center'>
                                <h2>Study Conclusions</h2>
                                <hr/>
                            </div>
                            <div className='col-xl-12'>
                                <p>The IT department needs a web system with a database of the projectors with the next fields: </p>
                                    <ul>
                                        <li>Assets department Serial number</li>
                                        <li>IT department serial number</li>
                                        <li>Device serial number</li>
                                        <li>Model</li>
                                        <li>Installation date</li>
                                        <li>Installer Technician</li>
                                        <li>State</li>
                                        <li>Location</li>
                                    </ul>
                                
                                <p>Is possible that the Assets department has already a control system of the materials, but the lack of communication between departments makes necessary an ad-hoc system for the IT department, with only the support for their inventory.</p>
                                <p>Is required to be possible to consult the information of the projectors by serial number or location </p>
                                <p>The projectors will be only dropped from the database when is verified its inutility.</p>
                                <p>Every change is going to be logged</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div id='extra'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 text-center'>
                                <h2>Extra information</h2>
                                <hr/>
                            </div>
                            <div className='col-xl-12'>
                                <ul>
                                    <li>Wireframe: <a href="https://o6n6b9.axshare.com">https://o6n6b9.axshare.com</a></li>
                                    <li>UX fundamentals doc: <a href="https://1drv.ms/w/s!AuhTev_HrLxbja1Wsu8aPpxQbrq_4Q">https://1drv.ms/w/s!AuhTev_HrLxbja1Wsu8aPpxQbrq_4Q</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 text-center'>
                                <p>Copyright Iván Morett & Alejandro González</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default LandingPage;