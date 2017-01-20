const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const CartConstants = require('../constants/CartConstants');

class CartStoreFactory extends EventEmitter {
	constructor() {
		super();
		this.products = {};
		this.cartVisible = false;
	}

	// Return cart items
	getCartItems() {
		return this.products;
	}

	// Retrurn amount of items in cart
	getCartAmount() {
		return Object.keys(this.products).length;
	}

	// Return cart total cost
	getCartTotal() {
		const products = this.products;
		const keys = Object.keys(products);

		const total = keys.reduce((result, current) =>
			result + (products[current].price * products[current].amount)
		, 0);

		return parseFloat(total.toFixed(2));
	}

	// Return cart visibility state
	getCartVisible() {
		return this.cartVisible;
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

const CartStore = new CartStoreFactory();

AppDispatcher.register((payload) => {
	const action = payload.action;

	switch (action.actionType) {
	case CartConstants.CART_ADD:
		addItem(action.product);
		break;

	case CartConstants.CART_REMOVE:
		removeItem(action.product);
		break;

	case CartConstants.CART_VISIBLE:
		setVisibility(action.isVisible);
		break;

	default:
		return;
	}

	CartStore.emitChange();
});

function ProductCartModel(product) {
	this.id = product.id;
	this.name = product.name;
	this.price = product.price;
	this.sku = product.sku;
	this.amount = 1;
}

function addItem(product) {
	if (!CartStore.products[product.id]) {
		return (CartStore.products[product.id] = new ProductCartModel(product));
	}

	CartStore.products[product.id].amount += 1;

	return false;
}

function removeItem(product) {
	delete CartStore.products[product.id];
}

function setVisibility(visibility) {
	CartStore.cartVisible = visibility;
}

module.exports = CartStore;
