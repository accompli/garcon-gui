/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
  import React from 'react'
  import { render } from 'react-dom'
  
  import OrganisationItem from './organisationitem'
  
var OrganisationCards = React.createClass({
    
    
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
      
    render: function(){
        
        var organisationData = this.props.data.map(function(organisation, index) {
            return (
                    <OrganisationItem org={organisation} key={index}>
                    </OrganisationItem>
                    );
        }.bind(this));
        

        return ( 
                <div className="cardslist">
                    {organisationData}
                </div>
                );
    }
});

 export default OrganisationCards