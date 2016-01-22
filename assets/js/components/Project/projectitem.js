/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { Router, Route, Link } from 'react-router'
 
 import ApplicationItem from '../Application/applicationitem.js'
 
var Projects = React.createClass({
    
    componentDidUpdate: function() {
        componentHandler.upgradeDom();
    },
    
    getInitialState: function() {
         return {
            application: [],
            countApp: [],
            open: false,
            class:"application hide",
            onClick: "projectname default",
            newAppForm: "applicationform hide",
            openform: false,
            buttontxt: "New application"
         };
     },
     
    showApplication: function(){
          $.ajax({
                url: this.props.serverUrl+"/application",
                dataType: 'json',
                data: {id: this.props.project.projectid},
                success: function(data) {
                    console.log(data.applicationdata, data.count)
                            this.setState({
                                application: data.applicationdata,
                                countApp: data.count
                            });
                }.bind(this),
                error:  function(xhr, status, err) {
                        console.error(this.props.url, status, err.toString());
                        }.bind(this)
            });
    },
    
    componentDidMount: function(){
        this.showApplication();
     },
     
    showAppData: function(){
        if (this.state.open){
            this.setState({
                open: false,
                class:"application hide",
                onClick: "projectname default"
            });
        } else {
            this.setState({
                open: true,
                class:"application show",
                onClick: "projectname "
            });
        }
    },

    handleClick: function(e){
        e.preventDefault();
        
        var appname = this.refs.appname.value;
        var projectid = this.props.project.projectid;
        var version = this.refs.version.value;
        var user = "Jinhua";
        
        if (appname !== ""){
            this.addNewApplication({
                applicationname: appname,
                version: version,
                userid: user,
                projectid: projectid
            });
        }      
    },
    
    
    addNewApplication: function(applidata){
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/addapplication",
            dataType: 'json',
            type: 'POST',
            data: applidata,
            success:
                    function(data){ 
                        if (data.status === "success"){
                            console.log('added gelukt!')
                        }
                        else if (data.status === "fail"){
                            console.log("failed");
                        }
                    }.bind(this),
                    
            error:
                    function(xhr, status, err, jqXHR){
                        console.error(this.props.url, status, err.toString());
                         alert( jqXHR);
                    }.bind(this)
        });
    },
    
    stopPropagation: function(e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    },
    render: function(){
        
        var applicationData = this.state.application.map(function(application, index) {
            return (
                    <ApplicationItem app={application} key={index} countdata={index} serverUrl={this.props.serverUrl} state={this.state.class}>
                    </ApplicationItem>
                    );
        }.bind(this));

        return (
                <tbody>
                    <tr>
                        <td onClick={this.showAppData}><div className={this.state.onClick}>{this.props.project.projectname}</div></td>
                        <td><div className={this.state.onClick}>{this.props.project.editdate}</div></td>
                        <td><div className={`status ${this.state.onClick}`}>{this.state.countApp.length}</div></td>
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
                         

                    <tr className={this.state.class}>
                        <th className="mdl-data-table__cell--non-numeric"><div className="first-detail-data">Application</div></th>
                        <th>Edited</th>
                        <th><div className="status">Version</div></th>
                        <th><div className="status">Status</div></th>
                        <th><div className="edit">Edit</div></th>
                    </tr>
    
                    {applicationData}

                    <tr className={this.state.class}>
                        <td>
                            <button className="mdl-button mdl-js-button add-app" id={this.props.editId}>
                                <svg className="add-application-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                </svg>
                                    {this.state.buttontxt}
                            </button>
                    
                     <ul className="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect "
                        htmlFor={this.props.editId}>
                                
                        <div onClick={this.stopPropagation} className="mdl-card add_organisation">
                            <div className="mdl-card__title mdl-card--expand">
                                <h5> New Application </h5>
                            </div>
                    
                            <div className="mdl-card__supporting-text">
                                Application name <input className="mdl-textfield__input"
                                    type="text"
                                    id="appname"
                                    ref="appname"/>
                                <p></p>
                                Version: <input  className="mdl-textfield__input"
                                    type="text"
                                    id="version"
                                    ref="version"/>
                                <p></p>
                            </div>

                    <button className="mdl-button mdl-js-button"
                        type="submit"
                        onClick={this.handleClick}
                        name="submit">Add Application
                    </button>      

                        </div>
                    </ul>
                        </td>
                        <td>

                        </td>
                        <td>
                            
                        </td>
                        <td></td>
                        <td></td>
                    </tr>

                </tbody>
                );
    }
});

 export default Projects