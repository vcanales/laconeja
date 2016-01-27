import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';

class ConejaStore extends EventEmitter {

    constructor() {
        super();
        this.imagesData = {};
    }

    setImagesData(data) {
        this.imagesData = data;
        this.emitChange();
    }

    get images() {
        return this.imagesData;
    }

    emitChange() {
        this.emit('USER_CHANGE_EVENT');
    }

    addChangeListener(callback) {
        this.on('USER_CHANGE_EVENT', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('USER_CHANGE_EVENT', callback);
    }
}

const conejaStore = new ConejaStore;

conejaStore.dispatchToken = AppDispatcher.register((action) => {

});

module.exports = userStore;