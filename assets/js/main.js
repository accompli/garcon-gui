import '../css/main.css';

import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, IndexRedirect, History } from 'react-router'
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
    
//    onUpdate: function(){
//            this.setState({
//                status: 'Jinhua'
//            });
//        },
    
    render : function() {
            const depth = this.props.routes.length;
            
    return (
            <div className="app">
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <div className="no_login_header">
                    <Header status={this.state.status}
                            photo={this.state.photo}/>
                </div>

            <ul className="breadcrumbs-list">
                {this.props.routes.map((item, index) =>
                  <li key={index}>
                    <Link
                      onlyActiveOnIndex={true}
                      activeClassName="breadcrumb-active"
                      to={item.path || ''} > 
                      {item.component.title}
                    </Link>
                    {(index + 1) < depth && '\u2192'}
                  </li>
                )}
              </ul>
                      

                <main className="mdl-layout__content">

                        {React.cloneElement(this.props.children, {onUpdate: this.onUpdate})}

                </main>
            </div>
            </div>
    );
  }
});


App.path = '/'
App.title='Home'

ReactDOM.render(
        <Router>
            <Route path={App.path} name="App" component={App}>
            <IndexRoute name="Login" component={Login}/>
            <Route name="Forgetpass" path={Forgetpass.path} component={Forgetpass}/>
            <Route name="Dashboard" path={Dashboard.path} component={Dashboard}/>
            <Route name="Usersettings" path={Usersettings.path} component={Usersettings} />
            <Route name="Create user" path={Newuser.path} component={Newuser}/>
            <Route name="Organisations" path={Organisations.path} component={Organisations} />
            <Route name="Account setting" path={AccountSetting.path} component={AccountSetting} />
            
            </Route>
        </Router>,
        document.getElementById("content")
                );
        
        
        
       