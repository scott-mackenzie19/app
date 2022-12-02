import React from 'react'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import axios from "axios";
axios.defaults.baseURL='http://ec2-52-14-129-198.us-east-2.compute.amazonaws.com'

let thePath = window.location.pathname;
let lastItem = thePath.substring(thePath.lastIndexOf('/') + 1);

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/feed">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile/:id">
          <Profile id={lastItem}/>
        </Route>
      </Switch>
    </Router>
  )
}

