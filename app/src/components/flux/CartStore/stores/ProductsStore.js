const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const CartConstants = require('../constants/CartConstants');

class ProductStoreFactory extends EventEmitter {
	constructor() {
		super();
		this.products = [];
	}

	// Return Product list
	getProducts() {
		return this.products;
	}

	// Emit Change event
	emitChange() {
		this.emit('change');
	}

	// Add change listener
	addChangeListener(callback) {
		this.on('change', callback);
	}

	// Remove change listener
	removeChangeListener(callback) {
		this.removeListener('change', callback);
	}
}

AppDispatcher.register(register);
const ProductStore = new ProductStoreFactory();

// Will load products from some API
function loadProducts(data) {
	ProductStore.products = data;
}

function register(payload) {
	const action = payload.action;

	switch (action.actionType) {

	case CartConstants.LOAD_PRODUCTS:
		loadProducts(action.data);
		break;

	default:
		return;
	}

	ProductStore.emitChange();
}

module.exports = ProductStore;
