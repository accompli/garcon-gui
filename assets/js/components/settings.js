/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

var Settings = React.createClass ({
    render : function(){
        return (
                <div className = "settings">
                    <Link to = '/usersettings'> User settings </Link>
                    <Link to = '/systemsettings'> System settings </Link>
                </div>
                )
    }
});
