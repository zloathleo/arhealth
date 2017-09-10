import React from 'react';
import PropTypes from 'prop-types';

import Constants from '../constants/Constants.jsx';
import StateManager from '../states/StateManager.jsx';
import JsonStaticServices from '../services/JsonStaticServices.jsx';
//患者
class PatientPanel extends React.Component {

    constructor(props) {
        super(props);
        this.doClickItem = this.doClickItem.bind(this);
    }

    doClickItem(_event) {
        console.log('当前选中病人:' + _event.currentTarget.dataset.id);
        StateManager.appState.changeCurrentPatient(_event.currentTarget.dataset.id);
        StateManager.appState.changeActiveModule(Constants.Values.Module_Symptom);
    }

    render() {
        let _item = this.props.item;
        return (
            <div className=".col-xs-12 col-md-6 col-lg-4" data-id={_item.id} onClick={this.doClickItem}>
                <div className="panel info-box panel-white">
                    <div className="panel-body">
                        <div className="info-box-stats">
                            <p className="counter">{_item.id}.{_item.name} {_item.sexy == 1 ?'男':'女'} {_item.age} 岁</p>
                            <span className="info-box-title">诊断中</span>
                        </div>
                        <div className="info-box-icon">
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="info-box-progress">
                            <div className="progress progress-xs progress-squared bs-n">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
PatientPanel.PropsType = {
    item: PropTypes.object
}

class PatientListComponent extends React.Component {

    constructor(props) {
        super(props); 
    }

    render() {
        let _data = JsonStaticServices.binren;
        return (
            <div className="row">
                {_data == undefined ? null :
                    _data.map(function (item, i) {
                        return <PatientPanel item={item} />
                    })
                }
            </div>
        )
    }

}

PatientListComponent.PropsType = {
}

module.exports = PatientListComponent;