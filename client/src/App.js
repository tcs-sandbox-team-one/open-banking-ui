import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { withRouter } from 'react-router';
import './App.css';
import modules from "./app-modules";
import Login from "./app-modules/authentication-module/pages/login/login";
import Header from "./core-components/header/header";
import Sidebar from "./core-components/sidebar/sidebar";
// import Footer from "./core-components/footer/footer";

const SecretRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    sessionStorage.getItem('token') !==null?
      <Component {...props} />:
      <Redirect to='/' />
  )} />
);

const App = withRouter(({location}) => {
  return (
    <>
    { (sessionStorage.getItem('token') !==null) && <Header /> }
    <div className="wrapper">
      { (sessionStorage.getItem('token') !==null) && <Sidebar /> }
      <div id="content">
        
        { (sessionStorage.getItem('token') !==null && location.pathname === '/') ?  <Redirect to='/dashboard' /> :  <Route path="/" exact component={Login}/> }      
        {
          modules.map(module => (
            module.pages.map((page, index) => {
              return <SecretRoute path={page.routeProps.path} exact component={page.routeProps.component} 
              key={index} currentLocation={location.pathname}/>
            })
          ))
        }
        {/* { Services.AuthService.isAuthenticated && <Footer /> } */}
      </div>
    </div>
    </>
  );
})

export default App;
