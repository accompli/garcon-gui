/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    import React from 'react'
    import { Router, Route, Link } from 'react-router'

    import GreenBox from '../Layout/greenbox.js'
    import BreadcrumbsBox from '../Layout/breadcrumbs.js'
    import EditOrganisationBox from './editorganisationbox.js'

var EditOrganisation = React.createClass({
    
    loadOrganisations: function(){
        $.ajax({
            url: this.props.ajaxUrl+"/organisation",
            dataType: 'json',
            success: function(data) {
                        this.setState({
                            data: data.organisationdata
                        });
            }.bind(this),
            error:  function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                    }.bind(this)
        });
    },
    
    getInitialState: function() {
        return {data: []};
    },
    
    componentDidMount: function(){
        this.loadOrganisations();
    },
    
    render: function(){

        if (this.state.data.length === 0){
            return (
                    <div className="editorganisation">
                            <GreenBox title={EditOrganisation.title} />
                            <BreadcrumbsBox />
                            <div className="box">
                                <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
                                <h2>Loading....</h2>
                            </div>
                    </div>
                    )
        }
        
        else{
             return (
                        <div className="editorganisation">
                            <GreenBox title={EditOrganisation.title} />
                            <BreadcrumbsBox />
                            <EditOrganisationBox orgId={this.props.params.orgid} data={this.state.data} countdata={this.props.params.countdata}/>
                            </div>
                );
        }
    }
    
});

    EditOrganisation.title = "Edit organisation";
    EditOrganisation.path = '/editorganisation/:orgid/:countdata';

    export default EditOrganisation
