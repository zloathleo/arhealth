import { observable, action } from 'mobx';

export default class SymptomState {
    @observable selectedSymptoms = new Map();

    @action addSelectedSymptom(_id, _item) {
        this.selectedSymptoms.set(_id, _item);
    }

    @action removeSelectedSymptom(_id) {
        this.selectedSymptoms.delete(_id);
    }

} 