/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var LoginBox = React.createClass({
    getInitialState: function(){
        return {
            invalidmessage: ''
        };
    },
    
    handleInlogSubmit: function(username){
        var that = this;
        
        //Submit to the server
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: username,
            success:
                    function(data){
                        if (data.status === "success"){
                            location.href="user_settings.php";
                            console.log('Gelukt');
                        }
                        else if (data.status === "fail"){
                            console.log(data.message);
                                              var errormessage = "Wrong username input";
                  console.log(errormessage);
                            that.setState({
                                invalidmessage: data.message
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
                <div className="loginBox">
                    <div className="demo-card-square mdl-card mdl-shadow--2dp">
                        <div className="mdl-card">
                            <div className="head">Login</div>
                            <LoginForm  onInlogSubmit={this.handleInlogSubmit}
                                        foo={this.state.invalidmessage}/>
                        </div>
                    </div>
                </div>
                );
    }
});

var LoginForm = React.createClass({
    getInitialState: function(){
        return {
            username: '',
            password: ''
        };
    },
    
    handleUsernameChange: function(e){
        this.setState({
            username: e.target.value
        });
    },
    
    handlePasswordChange: function(e){
        this.setState({
            password: e.target.value
        });
    },
    
    handleSubmit: function(e){
        e.preventDefault();
        
        var username = this.state.username.trim();
        var password = this.state.password.trim();
        
        if (!username || !password){
            this.setState({
                errormessage: 'No username or password'
            });
            
            return;
        }
        
        //Empty form & errormessage
        this.setState({
            username: '',
            password: '',
            errormessage: ''
        });
        
        //Send request to the server
        this.props.onInlogSubmit({
            username: username,
            password: password
        });
    },
    
    render: function() {
        return (
                <form className="inlogForm" onSubmit={this.handleSubmit}>
   
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input  className="mdl-textfield__input"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleUsernameChange}
                                id="username" />
                        <label  className ="mdl-textfield__label" htmlFor="username" >
                            Username
                                <span className="form_icon">
                                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>
                                </span>
                        </label>
                    </div>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input  className="mdl-textfield__input"
                                type="password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                id="password" />
                        <label  className ="mdl-textfield__label" htmlFor="password" >
                            Password
                                <span className="form_icon">
                                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6-5.1c1.71 0 3.1 1.39 3.1 3.1v2H9V6h-.1c0-1.71 1.39-3.1 3.1-3.1zM18 20H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                                    </svg>
                                </span>
                        </label>
                    </div>
            
                    {this.props.foo}
                    {this.state.errormessage}
            
                    <label  className="mdl-checkbox mdl-js-checkbox" htmlFor="checkbox-signin" >
                        <input  className="mdl-checkbox__input"
                                id="checkbox-signin"
                                type="checkbox" />
                        <span className="mdl-checkbox__label"> Keep me signed in </span>
                    </label>
                    
                    <div className="forget_pwd">
                        <span><a href="#">Forgot your password?</a></span>
                        <button className="mdl-button mdl-js-button login"
                                type="submit"
                                name="submit">Login</button>
                    </div>
                </form>
                );
    }
});

var LoginTest = React.createClass({
   
    render: function(){
        return(
                <h2>Test</h2>
                
            );
    }
});

ReactDOM.render(
<LoginBox url="http://garcon-server.jinhua.choffice.nl/login" />,
document.getElementById('login_block')
);
