/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react'
import { Router, Route, Link, History, Navigation } from 'react-router'

var Header = React.createClass({
    
    logout: function(){
        localStorage.removeItem('profile');
        location.reload();
    },
    
    render: function() {
        
        var firstName = this.props.status
        
        if (firstName === 'Login'){
            return (
                <div className = "mdl-layout__header-row">
                    <div className = "garconlogo">
                        <Link to='/login'> 
                        <img className="image" src={'assets/img/logo.png'} alt="garcon-logo" />
                        </Link>
                    </div>
            
                    <div className = "mdl-layout-spacer">
                    </div>
            
                           
                     <div className = "navigation login_button">

                            <Link to="/login">
                            <span>
                                <svg id="icon_login" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                            </span>
                              
                            
                            <span   className = "login_text">{this.props.status} </span>
                            </Link>

                    </div>
            
            
                </div>
                
    );
        }
        else {
            return (
            <div className = "mdl-layout__header-row">
                <div className = "garconlogo">
                    <Link to='/'>
                    <img className="image" src={'assets/img/logo.png'} alt="garcon-logo" />
                    </Link>
                </div>

                <div className = "mdl-layout-spacer">
                </div>

                <div className="navigation menu">
                    <Link to="/">Dashboard</Link>
                    <Link to="/organisations">Organisations</Link>

                    <a id="settings">Settings
                        <span>
                            <svg id="arrow_dropdown" fill="#000000" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10l5 5 5-5z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                        </span>
                    </a>

                </div>

                <ul className="mdl-menu mdl-js-menu navigation tabmenu_item" htmlFor="settings">
                    <li className="mdl-menu__item">
                        <Link to="/usersettings">Users</Link>
                    </li>

                    <li className="mdl-menu__item">
                        <Link to="/systemsetting">System</Link>
                    </li>
                </ul>

            <div id="btn-login" className = "navigation login_button">

                
                <a>
                <span >
                    <img src={this.props.photo} id="icon_login"/>
                </span>
               

                <span   className = "login_text">{this.props.status} </span>
                </a>
        
            </div>
        
                <ul className="mdl-menu mdl-js-menu navigation tabmenu_item" htmlFor="btn-login">
                    <li className="mdl-menu__item">
                        <Link to="/accountsetting">Edit profile</Link>
                    </li>

                    <li className="mdl-menu__item">
                        <Link to="/" onClick={this.logout}>Logout</Link>
                    </li>
                </ul>

            


            </div>

            );
        }
        
        
    
}
});

Header.title = 'Header'
Header.path = '/header'

export default Header;