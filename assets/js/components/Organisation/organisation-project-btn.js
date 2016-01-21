/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  
 import React from 'react'
 import { render } from 'react-dom'
 import { Router, Route, Link, History } from 'react-router'

var ProjectButton = React.createClass({
    
    render: function(){

            return (
                    <Link to={`/project/${this.props.orgid}/${this.props.orgname}`}>
                       <button className="mdl-button mdl-js-button card_button"
                            type="submit"
                            onClick={this.handleSubmit}
                            name="submit"
                            value={this.props.orgid}>View Details
                       </button>             
                    </Link>
                    );

        }
    });

 export default ProjectButton
