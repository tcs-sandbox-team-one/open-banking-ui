import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import _ from 'lodash';
import { LOGIN_GRAPHIC } from '../../../../app-constant/images';
import { doSignin } from "../../../../actions/authentication";

import "./login.css";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormValid: true,
            errorMsg:'',
            username:'',
            password: '',
        }
    }

    changeLogin = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSignInSubmit = (event) => {
        event.preventDefault();
        if(this.state.username === '' || this.state.password === '') {
            this.setState({isFormValid:false,errorMsg:'Username and password are required!'})
        } else {
            let requestPayload = {
                username: this.state.username,
                password: this.state.password
            };

            this.props.doSignin(requestPayload).then(
                ()=> {
                                      
                    if(this.props.userInfo.error === false && this.props.userInfo.token !==''){
                        sessionStorage.setItem('token',this.props.userInfo.token);
                        this.setState({isFormValid:true,errorMsg:''});
                        this.props.history.push('/dashboard');
                    } else {
                        this.setState({isFormValid:false,errorMsg:'Username and/or password are not exist!'});
                    }
                }
                    
            );
        }

    }

    render() {
       
        return (
            <section id="wrapper">
                <div className="login-container">
                    <div className="login-graphic">
                        <figure className="graphic-figure"><img src={LOGIN_GRAPHIC} alt="logo" /></figure>
                    </div>
                    <div className="login-section">
                        <span className="login-logo">Finance</span>
                        <div className="page-header">
                            <h3>Sign in</h3>
                        </div>
                        <form name="loginForm" onSubmit={this.onSignInSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control username" name="username" placeholder="Username" onChange={this.changeLogin}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control password" name="password"placeholder="Password" onChange={this.changeLogin}/>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Sign in</button>
                        </form>
                        { 
                            !this.state.isFormValid && <div className="alert alert-danger mar-top10" role="alert">
                                {this.state.errorMsg}
                            </div>
                        }
                        <div className="row margin-top-30">
                            <div className="col-lg-6">
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe"/>
                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                </div>
                            </div>
                            <div className="col-lg-6"><a href="change-password.html" className="change-password float-right">Forgot Password?</a>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="margin-top-15">Don't have your account ?</p>
                            </div>
                            <div className="col-lg-6">
                                <a href="register.html" className="btn btn-secondary float-right">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Login.propTypes = {
    doSignin: PropTypes.func.isRequired,
    //userInfo: PropTypes.objectOf(PropTypes.shape({}).isRequired).isRequired
}

Login.defaultProps = {
    userInfo: {},
};

const mapStateToProps = ({ authentication }) => {
  
    return {
        userInfo: authentication.userInfo
    }
}


export default withRouter((connect(mapStateToProps, {doSignin}))(Login));