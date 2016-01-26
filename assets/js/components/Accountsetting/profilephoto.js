/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { render } from 'react-dom'
  
    var ProfilePhoto = React.createClass({
        render: function (){
            return (

                    <div className="photobox">
                        <div className="titel photo">
                            Profile photo
                        </div>
                
                        <div className="photoframe">
                            <div className="setphoto">
                                <div className="phototxt">
                                    Drag your profile photo in here
                                </div>
                        
                                <div className="defaultpic">
                                    <svg className="insertphoto"height="50" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>
                                </div>
                            <button className="mdl-button mdl-js-button blue">
                                Or browse...
                            </button>
                            </div>
                        </div>
                    </div>

                    );
        }
    }); 

 export default ProfilePhoto