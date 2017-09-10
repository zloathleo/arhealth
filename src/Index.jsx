import React from 'react'
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { observer } from 'mobx-react';

import StateManager from './states/StateManager.jsx';
import LoginComponent from './components/LoginComponent.jsx';
import MainComponent from './components/MainComponent.jsx';
import NotFoundComponent from './components/NotFoundComponent.jsx';

useStrict(true);

@observer
class App extends React.Component {

    render() {
        console.log('App renderer');
        if (StateManager.appState.uiName == 'Login') {
            return (
                <LoginComponent />
            )
        } else {
            return (
                <MainComponent />
            )
        }
    }

};

const _root = document.getElementById('root');
ReactDOM.render(<App />, _root);