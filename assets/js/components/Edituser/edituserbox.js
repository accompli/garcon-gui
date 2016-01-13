/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react'
import { Router, Route, Link, History, Navigation } from 'react-router'

var EditUserBox = React.createClass({
    
    editUser : function(editdata){
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/editusers",
            dataType: 'json',
            type: 'POST',
            data: editdata,
            success:
                    function(data){
                        if (data.status === "success"){
                            console.log('done with edit!');
                            this.context.history.pushState(null, '/usersettings');
                            location.reload();
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
    
    contextTypes: {
        history: React.PropTypes.object.isRequired,
    },
    
    
    
    handleSubmit : function(e){
        e.preventDefault();
        
        var oldUsername = this.refs.username.value;
        var oldEmail = this.refs.email.value;
        var oldPhoto = this.refs.photo.value;
        var userId = this.refs.userid.value;
        
        console.log(oldUsername +" "+ oldEmail + userId);
        
        if (oldUsername && oldEmail !== ""){
            this.editUser({
                username: oldUsername,
                email: oldEmail,
                photo: oldPhoto,
                userid: userId
            });
        }        
    },
    
    render: function(){
        
        var username = this.props.data[this.props.dataId].username;
        var email = this.props.data[this.props.dataId].email;
        var photo = this.props.data[this.props.dataId].photo;
        
        return (
                <div className = "box">
                    <div className="loginBox">
                        <div className="edituserbox">
                            <div className="demo-card-square mdl-card mdl-shadow--2dp">
                               <div className="mdl-cardbox">
                               
                                    Username: <input  className="mdl-textfield__input"
                                    type="text"
                                    id="username"
                                    ref="username"
                                    defaultValue={username}
                                    placeholder={username}/>
                                <p></p>
                                E-mail: <input  className="mdl-textfield__input"
                                    type="text"
                                    id="email"
                                    ref="email"
                                    defaultValue={email}
                                    placeholder={email}/>
                                <p></p>
                                Photo source: <input  className="mdl-textfield__input"
                                        type="text"
                                        id="email"
                                        ref="photo"
                                        defaultValue={photo}
                                        placeholder={photo}/>
                                <p></p>
                        
                                <input  type="hidden"
                                        id="id"
                                        ref="userid"
                                        value={this.props.dataId} />
                        
                                <button className="mdl-button mdl-js-button"
                                        type="submit"
                                        onClick={this.handleSubmit}
                                        name="submit">Edit
                                </button>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
});


 export default EditUserBox
