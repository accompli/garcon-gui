/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

const About = React.createClass({
render : function(){
        return(
                <div className="about">
                    This is about page :)Trol! 
                
                <div className = "garconlogo">
                        <a href="login.html">
                        <img className="image" src={'img/logo.png'} alt="garcon-logo" />
                        </a>
                    </div>
                    </div>
                    
                );
    }
});

export default About;