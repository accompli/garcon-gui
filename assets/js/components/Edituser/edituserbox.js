/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react'
import { Router, Route, Link } from 'react-router'

var EditUserBox = React.createClass({
    
    editUser : function(){
        console.log("Geklikt op edit knop");
        
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/editusers",
            dataType: 'json',
            type: 'POST',
            data: editdata,
            succes:
                    function(data){
                        if (data.status === "success"){
                            console.log("Done with edit!");
                        }
                        else {
                            console.log("Failed with edit...");
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
        
        var oldUsername = this.refs.username.value;
        var oldEmail = this.refs.email.value;
        var oldPhoto = this.refs.photo.value;
        
        console.log(oldUsername +" "+ oldEmail);
        
        if (oldUsername && oldEmail !== ""){
            this.editUser({
                username: oldUsername,
                email: oldEmail,
                photo: oldPhoto
            });
        }        
    },
    
    render: function(){
        
        var username = this.props.data[this.props.dataId].username;
        var email = this.props.data[this.props.dataId].email;
        var photo = this.props.data[this.props.dataId].photo;
        
        return (
                <div className = "usersbox">
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
