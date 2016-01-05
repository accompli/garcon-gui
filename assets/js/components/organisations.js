/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, History } from 'react-router'

var Organisations = React.createClass({
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
                        Organisations
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