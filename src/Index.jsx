import React from 'react'
import ReactDOM from 'react-dom';

import { useStrict, observable, action } from 'mobx';
import { observer } from 'mobx-react';

useStrict(true);

var appState = observable({
    timer: 0
});

appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

setInterval(action(function tick() {
    appState.timer += 1;
}), 1000);

@observer
class TimerView extends React.Component {
    render() {
        return (<button type="button" className="btn btn-primary" onClick={this.onReset.bind(this)} > Seconds passed: {this.props.appState.timer}</button>);
    }

    onReset() {
        this.props.appState.resetTimer();
    }
};

const _root = document.getElementById('root');
ReactDOM.render(<TimerView appState={appState} />, _root);