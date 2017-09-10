import React from 'react';
import PropTypes from 'prop-types';

import Constants from '../constants/Constants.jsx';
import StateManager from '../states/StateManager.jsx';
import JsonStaticServices from '../services/JsonStaticServices.jsx';
//患者
class DepartmentPanel extends React.Component {

    constructor(props) {
        super(props);
        this.doClickItem = this.doClickItem.bind(this);
    }

    doClickItem(_event) {
        let _currentDepartmentId = _event.currentTarget.dataset.id;
        console.log('当前选中科室:' + _currentDepartmentId); 
        StateManager.appState.setCurrentDepartmentRefSymptoms(JsonStaticServices.getSymptomFromDepartmentId(_currentDepartmentId));
        StateManager.appState.changeCurrentDepartment(_currentDepartmentId);
        StateManager.appState.changeActiveModule(Constants.Values.Module_Patient_List);
    }

    render() {
        let _item = this.props.item;
        return (
            <div className=".col-xs-6 col-md-3 col-lg-3" data-id={_item.id} onClick={this.doClickItem}>
                <div className='panel info-box panel-white'>
                    <div className="panel-body">
                        <div>
                            <p className="counter">{_item.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
DepartmentPanel.PropsType = {
    item: PropTypes.object
}

class DepartmentCompoent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let _data = JsonStaticServices.keshi;

        const items = [] // 保存每个用户渲染以后 JSX 的数组
        if (_data != undefined) {
            for (let _key in _data) {
                items.push( // 循环每个用户，构建 JSX，push 到数组中
                    <DepartmentPanel item={_data[_key]} />
                )
            }
        }

        return (
            <div className="row">
                {items}
            </div>
        )
    }

}

DepartmentCompoent.PropsType = {
}

module.exports = DepartmentCompoent;