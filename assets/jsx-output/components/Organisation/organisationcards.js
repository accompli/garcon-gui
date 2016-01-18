/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _organisationitemJs = require('./organisationitem.js');

var _organisationitemJs2 = _interopRequireDefault(_organisationitemJs);

var OrganisationCards = _react2['default'].createClass({
    displayName: 'OrganisationCards',

    componentDidUpdate: function componentDidUpdate() {
        componentHandler.upgradeDom();
    },

    getInitialState: function getInitialState() {
        return {
            projectdata: []
        };
    },

    componentDidMount: function componentDidMount() {
        this.loadProjectData();
        //        this.loadProjectData();
    },

    loadProjectData: function loadProjectData() {
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/projects",
            dataType: 'json',
            success: (function (data) {
                this.setState({
                    projectdata: data.projectdata
                });
            }).bind(this),

            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },

    propTypes: {
        data: _react2['default'].PropTypes.array.isRequired
    },

    render: function render() {

        var organisationData = this.props.data.map((function (organisation, index) {
            return _react2['default'].createElement(_organisationitemJs2['default'], { org: organisation, key: index, projectdata: this.state.projectdata });
        }).bind(this));

        //        var projectData = this.state.projectdata.map(function(project, index) {
        //            return (
        //                    <ProjectItem project={project} key={index} >
        //                    </ProjectItem>
        //                    );
        //        }.bind(this));

        return _react2['default'].createElement(
            'div',
            { className: 'cardslist' },
            organisationData
        );
    }
});

exports['default'] = OrganisationCards;
module.exports = exports['default'];