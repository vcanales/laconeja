'use strict'

class response {

	constructor(data) {
		this._data 			= JSON.parse(data);
	}

	// check if request responded with status === ok
	get ok() {
		return (this._data.status.toLowerCase() === 'ok');
	}

	get data() {
		return this._data.data;
	}

	get errorMessage() {
		return this._errorMessage;
	}

	error(message) {
		return { status: 'error', message: message };
	}
}

module.exports = response;