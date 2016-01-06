/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, History } from 'react-router'

import GreenBox from '../greenbox.js'

var Organisations = React.createClass({
    render : function(){
        return (
                <div className="dashboard">
                    <GreenBox title={Organisations.title}/>
                    <BreadcrumbsBox />
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
    render : function () {
        return (
                <div className ="breadcrumbs">
                 
                </div>
                );
    }
});

Organisations.title = 'Organisations'
Organisations.path = '/organisations'


export default Organisations;