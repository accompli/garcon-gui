/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react'
import { render } from 'react-dom'
  
    var ProfileInformation = React.createClass({
        render: function (){
            return (

                    <div className="personalbox">
                        <div className="titel information">
                            Personal information
                        </div>
                
                        <div className="informationform">
                            
                        <div className="personalform">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input  className="mdl-textfield__input"
                                        type="text"
                                        id="name" />
                                <label  className ="mdl-textfield__label" htmlFor="name" >
                                    Name
                                </label>
                            </div>

                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input  className="mdl-textfield__input"
                                        type="text"
                                        id="mail" />
                                <label  className ="mdl-textfield__label" htmlFor="mail" >
                                    E-mail adress
                                </label>
                            </div>
                        </div>
                
                            <label  className="mdl-checkbox mdl-js-checkbox showemail" htmlFor="checkbox-signin" >
                                <input  className="mdl-checkbox__input"
                                        id="checkbox-signin"
                                        type="checkbox"
                                        defaultChecked='defaultChecked'/>
                                <span className="mdl-checkbox__label"> Don't show my e-mail to other users</span>
                            </label>

                        <div className="rightbtn">
                            <button className="mdl-button mdl-js-button">
                                Save settings
                            </button>
                        </div>
                        </div>
                    </div>
                    
                    );
        }
    }); 

 export default ProfileInformation