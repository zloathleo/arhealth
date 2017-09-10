import { observable, action } from 'mobx';

export default class MainLeftSideBarState {
    @observable isOpen;

    constructor() {
        this.isOpen = false;
    }

    @action changeOpen() {
        this.isOpen = !this.isOpen;
    }


} 