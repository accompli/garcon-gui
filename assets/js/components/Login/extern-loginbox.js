/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'

var ExternLoginBox = React.createClass({
    render: function(){
        return(
                <div className="externLoginBox">
                    <div className="mdl-extern_login">
                    
                        <button className="ext_login_button github">
                            Login with Github
                        </button>
                
                        <button className="ext_login_button google">
                            Login with Google
                        </button>
                    </div>
                </div>
                );
    }
});

 export default ExternLoginBox