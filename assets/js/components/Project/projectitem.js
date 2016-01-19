/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { Router, Route, Link } from 'react-router'
 
var Projects = React.createClass({
    render: function(){
        return (
                <tr>
                    <td>{this.props.project.projectname}</td>
                    <td>{this.props.project.editdate}</td>
                    <td><div className="status"></div></td>
                    <td><div className="status"></div></td>
                    <td >
                        <div className="status">
                            <button className="edit-options"
                                    id={this.props.project.projectid}>
                                            
                                    <i className="material-icons">

                                    <svg className="edit_icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                                    </svg>

                                    </i>

                            </button>

                            <ul className="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect "
                                htmlFor={this.props.project.projectid}>
                                    <Link to="/RecentActivity"><li className="mdl-menu__item">Recent activity</li></Link>
                                        <li className="mdl-menu__item">
                                            <Link to={`/editproject/${this.props.project.projectid}`}>Edit</Link>
                                        </li>
                                <li className="mdl-menu__item">Delete</li>
                            </ul>
                        </div>
                    </td>
                </tr>
                );
    }
});

 export default Projects