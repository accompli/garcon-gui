/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

  import React from 'react'

var SystemSettingsBox = React.createClass({
    render: function(){
        return (
                <div className="box">
                        <div className="mdl-card mdl-shadow--2dp systemcard">
                            <div className="system">
                                <div className="titel">Visual settings</div>
                        
                                <div className="middle">
                                    <div className="setlogo">
                                        <div className="systxt">
                                            Drag your logo here
                                        </div>

                                        <div className="defaultpic">
                                            <svg className="insertphoto"height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                                                <path d="M0 0h24v24H0z" fill="none"/>
                                            </svg>
                                        </div>
                                        <button className="mdl-button mdl-js-button blue">
                                            Or browse...
                                        </button>
                                    </div>
                            
   
                        
                                    <div className="colorpickbox"> Brandcolor</div>
                        
                                </div>
                                <div className="foot">
                                <span className="left"><a href="">Restore original settings</a></span>
                        
                                <span className="right">
                                    <button className="mdl-button mdl-js-button">
                                        Save settings
                                    </button>
                                </span>
                                </div>
                        </div>
                    </div>
                </div>
                );
    }
});

 export default SystemSettingsBox;
