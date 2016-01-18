/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'

 import ProjectTable from './projecttable.js'

var ProjectBox = React.createClass({
    render : function(){
        return (
                <div className = "box">
                    <div>Hier komen de filters ...</div>
                    <ProjectTable />
                </div>
                );
    }
});

 export default ProjectBox


