import React from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react';

import Constants from '../constants/Constants.jsx';
import StateManager from '../states/StateManager.jsx';
import MainLeftSideBar from './MainLeftSideBar.jsx';
import PatientListComponent from './PatientListComponent.jsx';
import SymptomComponent from './SymptomComponent.jsx';
import DepartmentCompoent from './DepartmentCompoent.jsx';

class MainTopNavBar extends React.Component {

    doPushSidebar() {
        StateManager.mainLeftSideBarState.changeOpen();
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="logo-box">
                        <a href="#" className="logo-text"><span>AR Health</span></a>
                    </div>

                    <div className="topmenu-outer">
                        <div className="top-menu">
                            <ul className="nav navbar-nav navbar-left">
                                <li>
                                    <a href="#" onClick={this.doPushSidebar} className="waves-effect waves-button waves-classic push-sidebar">
                                        <i className="fa fa-bars"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        )
    };
}


class MainLoadingComponent extends React.Component {
    render() {
        return (
            <div className="panel panel-white">
                <div className="panel-heading clearfix">
                    <h4 className="panel-title">Animated</h4>
                </div>
                <div className="panel-body">
                    <p>Add <code>.active</code> to <code>.progress-bar-striped</code> to animate the stripes right to left. Not available in IE9 and below.</p>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
                            <span className="sr-only">45% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

@observer
class MainContent extends React.Component {

    render() {
        if (StateManager.appState.activeModule == Constants.Values.Module_MainLoading) {
            return (
                <MainLoadingComponent />
            )
        } else if (StateManager.appState.activeModule == Constants.Values.Module_Department_List) {
            return (
                <DepartmentCompoent />
            )
        } else if (StateManager.appState.activeModule == Constants.Values.Module_Patient_List) {
            return (
                <PatientListComponent />
            )
        } else if (StateManager.appState.activeModule == Constants.Values.Module_Symptom) {
            return (
                <SymptomComponent />
            )
        }
    };
}

class MainComponent extends React.Component {
    render() {
        return (
            <main className="page-content content-wrap">
                {/**顶部菜单**/}
                <MainTopNavBar />
                <MainLeftSideBar />
                <div className="page-inner" style={{ minHeight: '1080px !important' }}>
                    <div id="main-wrapper">
                        <MainContent />
                    </div>
                </div>
            </main>
        )
    }
}

MainComponent.PropsType = {
}

module.exports = MainComponent;