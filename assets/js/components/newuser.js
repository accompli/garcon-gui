/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, History, Navigation } from 'react-router'


var Newuser = React.createClass({
    render : function(){
        return (
                <div className="dashboard">
                <GreenBox />
                <BreadcrumbsBox />
                <NewUser />
                </div>
                );
    }
});

var GreenBox = React.createClass({
    render : function(){
        return (
                <div className="block green">
                    <div className="block_text">
                        Create new user
                    </div>
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

var NewUser = React.createClass({
    
    addNewUser : function(newuser){
        //console.log(newuser);
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/users",
            dataType: 'json',
            type: 'POST',
            data: newuser,
            success:
                    function(data){ 
                        if (data.status === "success"){
                            console.log('new user added complete');
                        }
                        else if (data.status === "fail"){
                            console.log("failed");
                        }
                    },
                    
            error:
                    function(xhr, status, err, jqXHR){
                        console.error(this.props.url, status, err.toString());
                         alert( jqXHR);
                    }.bind(this)
        });
        
    },
    
    handleSubmit : function(e){
        e.preventDefault();
        
        var newusername = this.refs.username.value;
        var newemail = this.refs.email.value;
        
        if (newusername && newemail !== ""){
            this.addNewUser({
                username: newusername,
                email: newemail
            });
        }        
    },
    
    render : function(){
        return (
                <div className = "box">
                
                    <div className="loginBox">
                        <div className="demo-card-square mdl-card mdl-shadow--2dp">
                            <div className="mdl-cardbox">
                            <Link to="/usersettings"> Terug-btn </Link>
                                <h5>Add new user </h5>
                        
                                Username: <input  className="mdl-textfield__input"
                                    type="text"
                                    id="username"
                                    ref="username"/>
                                <p></p>
                                E-mail: <input  className="mdl-textfield__input"
                                    type="text"
                                    id="email"
                                    ref="email"/>
                                <p></p>
                                
                        
                                <button className="mdl-button mdl-js-button"
                                        type="submit"
                                        onClick={this.handleSubmit}
                                        name="submit">Add user
                                        </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                );
    }
});



Newuser.title = 'Create new user';
Newuser.path = '/newuser';


export default Newuser;