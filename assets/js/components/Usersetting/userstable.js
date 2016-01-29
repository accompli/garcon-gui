/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import { Router, Route, Link } from 'react-router'
import $ from 'jquery';
import Edit from './edit.js'

var UsersTable= React.createClass({
    
    componentDidUpdate: function() {
        componentHandler.upgradeDom();
    },
    
    getInitialState: function() {
        return {data: []};
    },
    
    componentDidMount: function(){
        this.loadUsers();
    },
    
    loadUsers: function() {
        $.ajax({
            url: this.props.serverUrl+"/users",
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
    
    refreshUsers: function() {
        this.loadUsers();
    },
    
    
    render: function (){
        return (
                <div className="list users">
               
                    <UsersList refreshUsersList={this.refreshUsers} data={this.state.data} serverUrl={this.props.serverUrl}/>   
                    
                    <Link to="/newuser">
                        <button className = "mdl-button mdl-js-button add_user"
                                    type=""
                                    name="submit"
                                    id="addnewuser">
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
    
    refreshList: function(){
        this.props.refreshUsersList();
    },
        
    render: function(){
        
        var countData = this.props.data.length;
        
        var userData = this.props.data.map(function(user, index) {
            return (
                    <Users refreshList={this.refreshList} user={user} key={index} countdata={index} serverUrl={this.props.serverUrl}>
                    </Users>
                    );
        }.bind(this));
        

        return ( 
                <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <thead>               
                            <tr>
                                <th className="mdl-data-table__cell--non-numeric">Photo</th>
                                <th>Username</th>
                                <th>E-mail</th>
                                <th><div className="status">Projects</div></th>
                                <th><div className="edit">Edit</div></th>
                        
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

    deleteUser: function(){
           
        $.ajax({
            url: this.props.serverUrl+"/deleteuser",
            dataType: 'json',
            type: 'POST',
            data: {userid: this.props.user.userid},
            success:
                    function(data){
                        this.props.refreshList();
                        if (data.status === "success"){
                            
                        }
                        else if (data.status === "fail"){
                            console.log("Failed with edit...");
                        }
                    }.bind(this),     
            error:
                    function(xhr, status, err, jqXHR){
                        console.error(this.props.url, status, err.toString());
                         alert( jqXHR);
                    }.bind(this)
        });
    },
    
    
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
                    <td><div className="status">{this.props.user.projects}</div></td>
                    <Edit delete={this.deleteUser} userid={this.props.countdata} username={this.props.user.username} email={this.props.user.email}/>
                </tr>
        );
    }
});



 export default UsersTable