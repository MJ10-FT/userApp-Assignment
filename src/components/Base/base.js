import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Footer from './Footer/footer';
import Header from './Header/header';
import Login from './Login/login';
import Profile from './Profile/profile';

  const routes = [
    {
      path: "/login",
      exact: true,
      component: Login
    
    },
    {
      path: "/profile",
      exact: true,
      component: Profile

    },

  ];

  const names = ["a","b"]

const Base = () => {
    return (

        <>
        <Header></Header>
            <Switch>
              {routes.map((route, index) => (
               
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component = {route.component}
                />
              ))}
            </Switch>
        <Footer></Footer>
        </>
  
      );
}
 
export default Base;