import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import StateManager from '../states/StateManager.jsx';
import JsonStaticServices from '../services/JsonStaticServices.jsx';
//症状
@observer
class SelectedSymptomPanel extends React.Component {

    doClickSaveSelectedSymptoms() {

    }

    render() {
        let _selected = StateManager.symptomState.selectedSymptoms.values();
        return (
            <div className="panel panel-success" style={{
                position: 'fixed',
                bottom: '0px',
                right: '20px',
                minWidth: '280px'
            }}>
                <div className="panel-heading">
                    <h3 className="panel-title">选中的症状</h3>
                    <div className="panel-control">
                        <a href="#" onClick={this.doClickSaveSelectedSymptoms}><i className="glyphicon glyphicon-ok"></i></a>
                    </div>
                </div>
                <div className="panel-body">
                    {/* {_selected == undefined ? null : _selected.map(
                        function (item, i) {
                            return <code>{item.name}</code>
                        }
                    )} */}
                </div>

            </div>
        )
    }
}

class SymptomPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selected: false };

        this.doClickItem = this.doClickItem.bind(this);
    }

    doClickItem(_event) {
        let _isSelected = this.state.selected;
        //选中状态
        this.setState({ selected: !_isSelected });

        let _selectedItemId = _event.currentTarget.dataset.id;
        console.log(_selectedItemId);
        let _zhenzhuang = JsonStaticServices.zhenzhuang[_selectedItemId];
 
        let _aaaa = StateManager.symptomState;
        console.log(_aaaa);
        if (_isSelected) {
            StateManager.symptomState.removeSelectedSymptoms(_zhenzhuang.id);
        } else {
            StateManager.symptomState.addSelectedSymptoms(_zhenzhuang.id,_zhenzhuang);
        }

    }

    render() {
        let _selectedClass = this.state.selected ? "panel panel-green info-box panel-white" : "panel info-box panel-white";
        let _item = this.props.item;
        return (
            <div className=".col-xs-6 col-md-3 col-lg-3" data-id={_item.id} onClick={this.doClickItem}>
                <div className={_selectedClass}>
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
SymptomPanel.PropsType = {
    item: PropTypes.object
} 

class SymptomComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let _dataSet = StateManager.appState.currentDepartmentRefSymptoms;
        let _data = Array.from(_dataSet);
        return (
            <div>
                <div className="row">
                    {_data == undefined ? null :
                        _data.map(function (item, i) {
                            return <SymptomPanel item={item} />
                        })
                    }
                </div>
                <SelectedSymptomPanel />
            </div >
        )
    }

}

SymptomComponent.PropsType = {
}

module.exports = SymptomComponent;