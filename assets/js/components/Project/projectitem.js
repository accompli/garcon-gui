/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { Router, Route, Link } from 'react-router'
 
 import Application from '../Application/application.js'
 
var Projects = React.createClass({
    
    getInitialState: function() {
         return {
            application: [],
            countApp: []
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
       
     },
    
    render: function(){

        return (
                <tbody>
                    <tr id={this.props.project.projectid}>
                        <td>{this.props.project.projectname}</td>
                        <td>{this.props.project.editdate}</td>
                        <td><div className="status">{this.state.countApp.length}</div></td>
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
                         

                       
                        <tr>
                           <th className="mdl-data-table__cell--non-numeric">Application</th>
                            <th>Edited</th>
                            <th><div className="status">Version</div></th>
                            <th><div className="status">Status</div></th>
                            <th><div className="edit">Edit</div></th>
                        </tr>
                                                        
                        

                    <Application data={this.state.application}/>


                </tbody>
                );
    }
});

 export default Projects