import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    render() {
        return (
            <div className="container" id='login'>
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input className="form-control" id="exampleInputPassword1" type="password" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"/><label className="form-check-label"> Remember Password</label>
                                </div>
                            </div>
                            <Link className="btn btn-primary btn-block" to="/dashboard">Login</Link>
                        </form>
                        <div className="text-center">
                            <a className="d-block small mt-3" href="register.html">Register an Account</a>
                            <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }

    componentWillMount(){
        document.getElementsByTagName('body')[0].classList.add('bg-dark');
    }

    componentWillUnmount(){
        document.getElementsByTagName('body')[0].classList.remove('bg-dark');
    }
}

export default LoginPage;