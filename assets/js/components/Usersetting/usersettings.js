/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react'
import { Router, Route, Link } from 'react-router'
import { createHistory, useBasename } from 'history'
import $ from 'jquery'

import GreenBox from '../Layout/greenbox.js'
import UsersBox from './usersbox.js'
import BreadcrumbsBox from '../Layout/breadcrumbs.js'

var Usersettings = React.createClass({
    render: function() {
        return (
                <div className ="usersettings">
                        <GreenBox title={Usersettings.title} />
                        <BreadcrumbsBox />
                        <UsersBox />
                </div>
                );
    }
});
    
Usersettings.title = 'Users'
Usersettings.path = '/usersettings'

export default Usersettings;

