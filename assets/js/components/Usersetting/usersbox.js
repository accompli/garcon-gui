/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'

import FilterBox from './filterbox.js'
import UsersTable from './userstable.js'

var UsersBox = React.createClass({
    render : function(){
        return (
                <div className = "box">
                
                    <FilterBox />          

                    <UsersTable />
                    
                </div>
                );
    }
});

 export default UsersBox


