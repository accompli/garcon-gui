/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react'
import $ from 'jquery'
import { render } from 'react-dom'
import { Router, Route, Link, History, Navigation } from 'react-router'

import Background from '../Layout/background-deployment-text.js'
import LoginBox from './loginbox.js'

var Login= React.createClass({ 
    render : function(){
        return (
                <div>
                <Background />
                <div className="white_block">
                    <div className="loginbox">
                        <LoginBox />
                    </div>
                </div>
                </div>
                );
    }
});

Login.title = 'Login'
Login.path = '/login'


 export default Login;