import { observable, action } from 'mobx';

import Constants from '../constants/Constants.jsx';

export default class AppState {
    @observable uiName = 'Login'; //登录和主页面 
    @observable activeModule = Constants.Values.Module_Department_List;//当前显示模块

    @observable currentDepartment = 1;//当前科室
    currentDepartmentRefSymptoms = undefined;//当前科室关联的症状
    @observable currentPatient = 1;//当前患者 

    @action changeUIName(newUI) { //当促发action的时候，改变对应的数据
        this.uiName = newUI;
    }

    @action changeActiveModule(_activeModule) {
        this.activeModule = _activeModule;
    }

    @action changeCurrentDepartment(_currentDepartment) {
        this.currentDepartment = _currentDepartment;
    }

    @action changeCurrentPatient(_currentPatient) {
        this.currentPatient = _currentPatient;
    }

    setCurrentDepartmentRefSymptoms(_s) {
        this.currentDepartmentRefSymptoms = _s;
    }
} 