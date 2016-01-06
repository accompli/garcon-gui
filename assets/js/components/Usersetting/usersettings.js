/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { createHistory, useBasename } from 'history'
import $ from 'jquery'

import GreenBox from '../greenbox.js'


var Usersettings = React.createClass({
    render: function() {
        return (
                <div className ="usersettings">
                        <GreenBox title={Usersettings.title} />
                        <BreadcrumbsBox />
                        <UsersBox />
                </div>
                );
    }
});

var BreadcrumbsBox = React.createClass({
    render : function() {
        return (
                <div className="block white">
                    <BreadcrumbsList />
                </div>
                );
    }
});

var BreadcrumbsList = React.createClass({
    render : function () {
        return (
                <div className ="breadcrumbs">

                </div>
                );
    }
});

var UsersBox = React.createClass({
    render : function(){
        return (
                <div className = "usersbox">
                
                    <FilterBox />          

                    <UsersBoard />
                    
                </div>
                );
    }
});

var FilterBox = React.createClass({
    render : function (){
        return (
                <div className = "filterbox">
                    <div className="filter search">
                        <div className="searchbox">
                                <svg className="search_icon filtericons" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                        <input className="searchform" type="search"  id="search" placeholder="Filter by name"/>
                        </div>
                    </div>
            
                    <div className="sort">
                        <div className="filter sortbox">
                            <div className = "sortbox_text">
                                Sort by Recently Edited
                                <div className="sort_arrows">
                                    <svg className="dropup_icon filtericons" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 14l5-5 5 5z"/>
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>

                                    <svg className="dropdown_icon filtericons" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10l5 5 5-5z"/>
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                );
    }
});

var UsersBoard= React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    
    componentDidMount: function(){
        this.loadUsers();
    },
    
    loadUsers: function(){
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/users",
            dataType: 'json',
            success: function(data) {
                        this.setState({
                            data: data.userdata
                        })
                        
            }.bind(this),
            error:  function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                    }.bind(this)
        });
    },
    
    render : function (){
        return (
                
                <div className="list users">
                
                    <UsersList data={this.state.data} />            
                    <Link to="/newuser">
                        <button className = "mdl-button mdl-js-button add_user"
                                    type=""
                                    name="submit">
                            <svg className="add_icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                            </svg>
                        </button>
                    </Link>
                </div>
                
                
                );
    }
});

var UsersList = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    
    render: function(){
        var userData = this.props.data.map(function(user, index) {
//                                   console.log(user)                 
            return (
                    <Users user={user} key={index}>
                    </Users>
                    );
        });
        
        
        return (
                <div className="usersList">
                    {userData}
                </div>
                );
    }
});


var Users = React.createClass({
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString());
        return { __html: rawMarkup };
    },
    
    showEdit: function(){
      console.log("cliked")  
    },
  
    render: function(){
        return (
                <div>
                
                <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <thead>               
                            <tr>
                                <th className="mdl-data-table__cell--non-numeric">Photo</th>
                                <th>Username</th>
                                <th>E-mail</th>
                                <th>Projects</th>
                                <th>Edit</th>
                            </tr>
                </thead>
                        <tbody>
                        
                            <tr>
                                <td className="mdl-data-table__cell--non-numeric"><img src={this.props.user.photo} id="usericons"/></td>
                                <td>{this.props.user.username}</td>
                                <td>{this.props.user.email}</td>
                                <td>{this.props.user.projects}</td>
                                <td> 
                                

                                </td>
                            </tr>

                        </tbody>     
                    </table>
            </div>
);
    }
})
        
        
Usersettings.title = 'Users'
Usersettings.path = '/usersettings'

export default Usersettings;

