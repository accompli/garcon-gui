/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { render } from 'react-dom'
 import { Router, Route, Link, History } from 'react-router'




var ApplicationItem = React.createClass({
    
    showAppStatus: function(){
            if (this.props.app.appstatus === "Error"){
                return (
                        <div className="status error">
                        <span>
                        <svg className="error" fill="#000000" height="20" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                        </span>
                <span>
                        {this.props.app.appstatus}
                        </span></div>
                        );
                }
            else {
                return (
                        <div className="status available">

                        <svg className="available" fill="#000000" height="20" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>

                        {this.props.app.appstatus}</div>
                        );
                }
    },
        
    render : function(){
        return (
                <tr className={this.props.state}>
                    <td><div className="first-detail-data">{this.props.app.appname}</div></td>
                    <td>{this.props.app.editdate}</td>
                    <td><div className="status">{this.props.app.version}</div></td>
                    <td><div className="status">{this.showAppStatus()}</div></td>
                    <td >
                        <div className="status">
                            <button className="edit-options app-edit"
                                id={this.props.app.appid}>

                                <i className="material-icons">

                                <svg className="edit_icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                                </svg>

                                </i>

                            </button>

                            <ul className="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect "
                                    htmlFor={this.props.app.appid}>
                                            <li className="mdl-menu__item">
                                                Edit
                                            </li>
                                    <li className="mdl-menu__item">Delete</li>
                            </ul>
                        </div>
                    </td>
                </tr>
            );
    }
});


export default ApplicationItem;
