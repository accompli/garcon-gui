import '../css/main.css';

import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, IndexRedirect, History, Navigation } from 'react-router'
import $ from 'jquery'
import { createHistory, useBasename } from 'history'

import Forgetpass from './components/Forgetpassword/forgetpass.js'
import Login from './components/Login/login.js'
import Dashboard from './components/Dashboard/dashboard.js'
import Usersettings from './components/Usersetting/usersettings.js'
import Newuser from './components/newuser.js'
import Organisations from './components/Organisations/organisations.js'
import Header from './components/Layout/header.js'
import AccountSetting from './components/Accountsetting/accountsetting.js'
import SystemSetting from './components/Systemsetting/systemsetting.js'
import RecentActivity from './components/Recentactivity/recentactivity.js'

const history = useBasename(createHistory)({
  basename: '/breadcrumbs'
})

var App = React.createClass({
    
    
    getInitialState: function(){
        
        if (localStorage.getItem('profile') === null){
            
            return({
                status:'Login'
            });
        }
        else{
        var profileArrayObject = JSON.parse(localStorage.getItem('profile'));
        //var firstName = profile.firstname;
        
        //FOR LOOP KAN WEG! gebruik bij usersboard
        for (var i=0; i<profileArrayObject.length; i++){
            var profileObject = profileArrayObject[i];
            console.log("Name: " + profileObject.firstname);
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

                        {React.cloneElement(this.props.children, {onUpdate: this.onUpdate})}

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
            
            <Route name="Create user" path={Newuser.path} component={Newuser}/>
            <Route name="Organisations" path={Organisations.path} component={Organisations} />
            <Route name="Account setting" path={AccountSetting.path} component={AccountSetting} />
            
            <Route name="System setting" path={SystemSetting.path} component={SystemSetting} />
                
            </Route>
        </Router>,
        document.getElementById("content")
                );
        
        
        
       