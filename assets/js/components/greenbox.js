/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'

var GreenBox = React.createClass({
    render : function(){
        return (
                <div className="block green">
                    <div className="block_text">              
                    {this.props.title}
                    </div>
                </div>
                );
    }
});


export default GreenBox;

