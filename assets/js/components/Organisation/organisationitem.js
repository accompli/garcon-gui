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
    
    countProjects: function(data){
        
        $.ajax({
            url: this.props.serverUrl+"/projects",
            dataType: 'json',
            data: data,
            success: function(data) {
                        this.setState({
                            project: data.projectdata
                        });
            }.bind(this),
            error:  function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                    }.bind(this)
        });
    },
    
    getInitialState: function() {
         return {
             project: [],
             status: []
         };
     },

     componentDidMount: function(){
         this.countProjects({orgid: this.props.org.organisationid});

     },
    
    deleteOrganisation: function(){
        $.ajax({
            url: this.props.serverUrl +"/deleteorg",
            dataType: 'json',
            data: {orgid: this.props.org.organisationid},
            success:
                    function(data){
                        if (data.status === "success"){
                            this.props.reload();
                        }
                        else if (data.status === "fail"){
                        }
                    }.bind(this),     
            error:
                    function(xhr, status, err, jqXHR){
                        console.error(this.props.url, status, err.toString());
                         alert( jqXHR);
                    }.bind(this)
        });
    },

    Projects: function(){
        var projectLength = this.state.project.length;
        
        if (projectLength > 0){
            return (
                    <div className="card_projects">
                            Projects: {this.state.project.length}
                    </div>
                    )
        }
        else {
            return (
                    <div className="card_projects">
                        No projects
                    </div>
                    )
        }    
    },    
    
    loadStatus: function(){
        
         $.ajax({
            url: this.props.serverUrl+"/applicationstatus",
            dataType: 'json',
            data: {orgid: this.props.org.organisationid},
            success: function(data) {
                        this.setState({
                            status: data.status
                        })
            }.bind(this),
            error:  function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                    }.bind(this)
        });
        
        if (this.state.status === "Error"){
            return (
                    <div className="status error">
                        <span>
                            <svg className="error" fill="#000000" height="20" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                            </svg>
                        </span>
                
                        <span>
                            Error
                        </span>
                
                    </div>
                    )
        }
        else if (this.state.status === "Available") {
            return (
                    <div className="status available">
                    
                       <svg className="available" fill="#000000" height="20" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>

                        Available
                    </div>
                    )
        }
        else {
            return (
                    <div>
                        No status
                    </div>
                    )
        }

    },

    render: function(){    
        
        return (
                <div className="mdl-card mdl-shadow--2dp cards ">
                
                    <div className={`status_bar ${this.state.status}`}></div>

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
                                        <Link to={`/editorganisation/${this.props.org.organisationid}/${this.props.countdata}`}>Edit</Link>
                                    </li>
                                    <li className="mdl-menu__item" onClick={this.deleteOrganisation}> Delete</li>
                                </ul>
                        </div>

                        <div className="card_data">
                        
                            <div className="orglogo">
                                <img src={this.props.org.orgphoto} />
                            </div>
                    
                            <div className="card_title">
                                {this.props.org.orgname}
                            </div>

                            <div className="card_updatedate">
                                {this.props.org.orgdate}
                            </div>

                            <ProjectButton orgid={this.props.org.organisationid} orgname={this.props.org.orgname} projects={this.state.project}/>
                            
                        </div> 

                        <div className="mdl-card__actions mdl-card--border detailinfo">


                            
                                {this.Projects()}
                            


                            <div className="card_project_status">
                                {this.loadStatus()}
                            </div>
                
                        </div>
                </div>
                );
    }
});


 export default OrganisationItem 