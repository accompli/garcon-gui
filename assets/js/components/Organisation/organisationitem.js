/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

  import React from 'react'
  import { render } from 'react-dom'
  import { Router, Route, Link, History } from 'react-router'
  
  import ProjectButton from './organisation-project-btn.js'
  
var OrganisationItem = React.createClass({

    render: function(){

        return (
                <div className="mdl-card mdl-shadow--2dp cards ">
                
                    <div className="status_bar"></div>

                        <div className="status">
                            <button className="edit-options"
                                    id={this.props.org.organisationid}>
                                    <i className="material-icons">

                                       <svg className="edit_icon card" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M0 0h24v24H0z" fill="none"/>
                                       <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                                       </svg>

                                   </i>

                                </button>

                                <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                    htmlFor={this.props.org.organisationid}>
                                    <li className="mdl-menu__item">
                                        Edit
                                    </li>
                                    <li className="mdl-menu__item"> Delete</li>
                                </ul>
                        </div>

                        <div className="card_data">
                            <img className="orglogo" src={this.props.org.orgphoto} />

                            <div className="card_title">
                                {this.props.org.orgname}
                            </div>

                            <div className="card_updatedate">
                                {this.props.org.orgdate}
                            </div>

                            <ProjectButton projectdata={this.props.projectdata} orgid={this.props.org.organisationid} orgname={this.props.org.orgname}/>
                            
                        </div>

                        <div className="mdl-card__actions mdl-card--border detailinfo">

                            <div className="card_projects">
                                Aantal projecten
                            </div>

                            <div className="card_project_status">
                                Available
                            </div>
                
                        </div>
                </div>
                );
    }
});


 export default OrganisationItem 