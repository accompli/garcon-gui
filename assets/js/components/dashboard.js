/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, History } from 'react-router'

import Reflux from 'reflux';
import LoginStore from '../stores/loginstore'
import LoginActions from '../actions/loginactions'

var Dashboard = React.createClass({
    
    render : function(){
        return (
                <div className="dashboard">
                <GreenBox />
                <BreadcrumbsBox />
                
                </div>
);
}
});

var GreenBox = React.createClass({
    render : function(){
        return (
                <div className="block green">
                    <div className="block_text">
                        Dashboard
                    </div>
                </div>
                );
    }
});

var BreadcrumbsBox = React.createClass({
    render : function() {
        return (
                <div className="block white">
                    <BreadcrumbsList />
                </div>
                );
    }
});

var BreadcrumbsList = React.createClass({
    mixins: [Reflux.connect(LoginStore, 'loginstore')],
    
    render : function () {
        return (
                <div className ="breadcrumbs">
     
                </div>
                    );
        }
});

Dashboard.title = 'Dashboard'
Dashboard.path = '/dashboard'


export default Dashboard;