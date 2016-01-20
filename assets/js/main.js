import '../css/main.css';

import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, IndexRedirect, History, Navigation } from 'react-router'
import { createHistory, useBasename } from 'history'

import Forgetpass from './components/Forgetpassword/forgetpass.js'
import Login from './components/Login/login.js'
import Dashboard from './components/Dashboard/dashboard.js'
import Usersettings from './components/Usersetting/usersettings.js'
import Newuser from './components/newuser.js'
import Organisation from './components/Organisation/organisation.js'
import Header from './components/Layout/header.js'
import AccountSetting from './components/Accountsetting/accountsetting.js'
import SystemSetting from './components/Systemsetting/systemsetting.js'
import RecentActivity from './components/Recentactivity/recentactivity.js'
import EditUser from './components/Edituser/edituser.js'
import Project from './components/Project/project.js'
import EditOrganisation from './components/Editorganisation/editorganisation.js'

var App = React.createClass({
    
    componentDidUpdate: function() {
        componentHandler.upgradeDom();
    },
    
    getInitialState: function(){
        
        if (localStorage.getItem('profile') === null) {
            
            return({
                status:'Login'
            });
        }
        else {
            
            var profileArrayObject = JSON.parse(localStorage.getItem('profile'));
            //var firstName = profile.firstname;

            //FOR LOOP KAN WEG! gebruik bij usersboard
            for (var i=0; i<profileArrayObject.length; i++) {
                
                    var profileObject = profileArrayObject[i];
                }    

            return ({
                status: profileObject.firstname+" "+ profileObject.lastname,
                photo: profileObject.profilepic
            });
        }
    },
    
    render : function() {
        const depth = this.props.routes.length;
            
    return (
            <div className="app">
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <div className="no_login_header">
                    <Header status={this.state.status}
                            photo={this.state.photo}/>
                </div>
        
        
                <main className="mdl-layout__content">

                        {React.cloneElement(this.props.children, {ajaxUrl: "http://garcon-server.jinhua.choffice.nl"})}

                </main>
            </div>
            </div>
    );
  }
});


function requireAuth(){

    if (localStorage.getItem('profile') === null){
            this.context.history.pushState(null, '/login');
        } 
    }

App.path = '/'
App.title='Home'

ReactDOM.render(
        <Router>
            <Route path={App.path} name="App" component={App}>
            <IndexRoute name="Dashboard" component={Dashboard}/>
            
            <Route name="Forgetpass" path={Forgetpass.path} component={Forgetpass}/>
            <Route name="Login" path={Login.path} component={Login}/>
            
            <Route name="Usersettings" path={Usersettings.path} component={Usersettings} onEnter={requireAuth}/>
            <Route name="Recent activity" path={RecentActivity.path} component={RecentActivity}/>
            <Route name="Edit user" path={EditUser.path} component={EditUser} /> 
            
            <Route name="Create user" path={Newuser.path} component={Newuser}/>
            <Route name="Organisation" path={Organisation.path} component={Organisation} />
                <Route name="Project" path={Project.path} component={Project} />
                <Route name="Edit organisation" path={EditOrganisation.path} component={EditOrganisation} /> 
            <Route name="Account setting" path={AccountSetting.path} component={AccountSetting} />
            
            <Route name="System setting" path={SystemSetting.path} component={SystemSetting} />
            </Route>
        </Router>,
    document.getElementById("content")
                );
        
        
        
       