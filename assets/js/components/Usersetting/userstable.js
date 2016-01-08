/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react'
import { Router, Route, Link } from 'react-router'

import Edit from './edituser.js'

var UsersTable= React.createClass({
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
        
        var countData = this.props.data.length;
        
        var userData = this.props.data.map(function(user, index) {
            
            return (
                    <Users user={user} key={index} countdata={index}>
                    </Users>
                    );
        });
        

        return ( 
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
                            {userData}
                    
                        </tbody>     
                    </table>
                );
    }
});


var Users = React.createClass({
    
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString());
        return { __html: rawMarkup };
    },
  
    render: function(){
        return (
                <tr>
                    <td className="mdl-data-table__cell--non-numeric "><img src={this.props.user.photo} id="usericons"/></td>
                    <td>{this.props.user.username}</td>
                    <td>{this.props.user.email}</td>
                    <td>{this.props.user.projects}</td>
                    <Edit editid={this.props.countdata}/>
                </tr>
        );
    }
});



 export default UsersTable