import React from 'react';
import { observer } from 'mobx-react';

import Constants from '../constants/Constants.jsx';
import StateManager from '../states/StateManager.jsx';

@observer
class MainLeftSideBar extends React.Component {

    doClickPatient() {
        StateManager.appState.changeActiveModule(Constants.Values.Module_Patient_List);
        // StateManager.mainLeftSideBarState.changeOpen();
    }
    doClickSymptom() {
        StateManager.appState.changeActiveModule(Constants.Values.Module_Symptom);
        // StateManager.mainLeftSideBarState.changeOpen();
    }

    render() {
        let _class = StateManager.mainLeftSideBarState.isOpen ? 'page-sidebar sidebar visible' : 'page-sidebar sidebar';
        let _active_render = function (_moduleName) {
            if (_moduleName == StateManager.appState.activeModule) {
                return 'active';
            } else {
                return '';
            }
        }
        return (
            <div className={_class} >
                <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '100%' }}>
                    <div className="page-sidebar-inner slimscroll" style={{ overflow: 'hidden', width: 'auto', height: '100%' }}>
                        <ul className="menu accordion-menu">
                            <li className={_active_render(Constants.Values.Module_Patient_List)} onClick={this.doClickPatient}><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-home"></span><p>患者列表</p></a></li>
                            <li className={_active_render(Constants.Values.Module_Symptom)} onClick={this.doClickSymptom}><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-user"></span><p>症状输入</p></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        )
    };
}

module.exports = MainLeftSideBar;