import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from "./dashboard/dashboard";
// import Contactus from './contactus';
// import Homepage from './homepage';

import Header from "../components/Header/header";

import About from "./support/aboutus";
import Help from "./support/help";
import Notes from "./notes/notes.js";


// photo editor 
import PhotoEditor from "./photoeditor/photoeditor";
import PhotoSelector from "./photoeditor/photoselector";


// Admin login 

import AdminLogin from "../routes/admin/adminlogin";


class MainApp extends Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/app/about' component={About} />
                    <Route path='/app/help' component={Help} />
                    <Route path='/app/edit' component={PhotoEditor} />
                    <Route path='/app/gallary' component={PhotoSelector} />
                    <Route path='/app/admin/login' component={AdminLogin} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(null)(MainApp));

