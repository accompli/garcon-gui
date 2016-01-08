/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import { Router, Route, Link } from 'react-router'


var Edit = React.createClass({
    
    showEdit: function(){
        console.log(this.props.editid)  
    },
    
    
    render: function(){
        return (
                <td>
                
                    <button className="edit-options"
                            id={this.props.editid}>
                            <i className="material-icons">

                               <svg className="edit_icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                               <path d="M0 0h24v24H0z" fill="none"/>
                               <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                               </svg>

                           </i>
                   
                        </button>

                        <ul className="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect "
                            htmlFor={this.props.editid}>
                            <Link to="/RecentActivity"><li className="mdl-menu__item">Recent activity</li></Link>
                            <Link to="/Edit"><li className="mdl-menu__item">Edit</li></Link>
                            <li className="mdl-menu__item">Delete</li>
                        </ul>
                </td>
                );
    }
});

 export default Edit