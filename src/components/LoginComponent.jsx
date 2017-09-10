import React from 'react';
import PropTypes from 'prop-types';

import StateManager from '../states/StateManager.jsx';

class LoginComponent extends React.Component {

    constructor(props) {
        super(props); 

        this.doLogin = this.doLogin.bind(this);
    }

    doLogin(_params) {
        StateManager.appState.changeUIName('main');
    }

    render() {
        return (
            <main className="page-content">
                <div className="page-inner">
                    <div id="main-wrapper">
                        <div className="row">
                            <div className="col-md-3 center">
                                <div className="login-box">
                                    <a href="index.html" className="logo-name text-lg text-center">辅助XX系统</a>
                                    <p className="text-center m-t-md">请输入您的用户名和密码.</p>

                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="用户名" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="密码" required />
                                    </div>
                                    <button type="submit" className="btn btn-success btn-block" onClick={this.doLogin}>登录系统</button>
                                    <p className="text-center m-t-xs text-sm">2017 &copy; AR Health.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

}

LoginComponent.PropsType = {
}

module.exports = LoginComponent;