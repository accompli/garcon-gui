/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'

 import ProfileInformation from './profileinformation.js'
 import ProfilePhoto from './profilephoto.js'

var MyProfileBox = React.createClass({
    render: function(){
        return (
                <div className="box">
                    <div className="profile">
                        <div className="mdl-card profilecards profilephoto">
                            <ProfilePhoto />
                        </div>
                        <div className="mdl-card profilecards profiledata">
                            <ProfileInformation />
                        </div>
                    </div>
                </div>
                );
    }
});

 export default MyProfileBox;