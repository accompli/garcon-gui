/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

var Background = React.createClass({
    render : function(){
        return (
                    <div id="bot">
                        <div className="green-white-background">
                            <div className="deployment_txt">
                                Deployment made easy
                            </div>

                            <div className="top">
                            </div>
                        </div>
                    </div>
                );
    }
});

var Forgetpass = React.createClass({
    getInitialState: function(){
        return {
            invalidmessage: ''
        };
    },
    
    handleResetSubmit: function(email){
        var that = this;
        
        that.setState({
            message: ''
        }),
        
        //Submit to the server
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/email",
            dataType: 'json',
            type: 'POST',
            data: email,
            success:
                    function(data){
                        if (data.status === "success"){
                            //location.href="user_settings.php";
                            var sendMessage = "Thank you. Please make sure you check your inbox for our confirmation.";
                            that.setState({
                                message: sendMessage
                            });
                            console.log('Gelukt');
                        }
                        else if (data.status === "fail"){
                            console.log(data.message);
                            var errormessage = "Wrong email";
                            console.log(errormessage);
                            that.setState({
                                message: data.message
                            });
                        }
                    },
            error:
                    function(xhr, status, err){
                        console.error(this.props.url, status, err.toString());
                    }.bind(this)
        });
    },
    
    render: function() {
        return (
                <div>
                    <Background />
                    <div className="white_block">
                        <div className="resetBox">
                            <div className="demo-card-square mdl-card mdl-shadow--2dp">
                                <div className="mdl-cardbox">
                                    <div className="head">Reset password</div>
                                    <EmailForm  onResetSubmit={this.handleResetSubmit}
                                                foo={this.state.message}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
});

var EmailForm = React.createClass({
    getInitialState: function(){
        return {
            email: ''
        };
    },
    
    handleEmailChange: function(e){
        this.setState({
            email: e.target.value
        });
    },
    
    handleSubmit: function(e){
        e.preventDefault();
        
        var email = this.state.email.trim();
        
        if (!email){
            this.setState({
                errormessage: 'Empty email'
            });
            
            return;
        }
        
        //Empty form & errormessage
        this.setState({
            email: '',
            errormessage: ''
        });
        
        //Send request to the server
        this.props.onResetSubmit({
            email: email
        });
    },
    
    render: function() {
        return (
                <form className="emailForm" onSubmit={this.handleSubmit}>
   
                    <div className="errormsg-box">
                        {this.props.foo}
                    </div>
                    <div className="errormsg-box">
                        {this.state.errormessage}
                    </div>
   
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input  className="mdl-textfield__input"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                id="email" />
                        <label  className ="mdl-textfield__label" htmlFor="email" >
                            E-mail adress
                                <span className="form_icon">
                                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>
                                </span>
                        </label>
                    </div>

                    <div className="forget_pwd">
                        <span><Link to="/">Back to login</Link></span>
                        <button className="mdl-button mdl-js-button login"
                                type="submit"
                                name="submit">RESET</button>
                    </div>
                </form>
                );
    }
});

Forgetpass.title = 'Forget password'
Forgetpass.path = '/forgetpass'


export default Forgetpass;