const AppDispatcher = require('../dispatcher/AppDispatcher');
const CartConstants = require('../constants/CartConstants');

const CartActionsActions = {
	loadProducts(data) {
		AppDispatcher.handleViewAction({
			actionType: CartConstants.LOAD_PRODUCTS,
			data
		});
	},

	addToCart(productId) {
		AppDispatcher.handleViewAction({
			actionType: CartConstants.CART_ADD,
			product: productId
		});
	},

	removeFromCart(productId) {
		AppDispatcher.handleViewAction({
			actionType: CartConstants.CART_REMOVE,
			product: productId
		});
	},

	toggleCartVisible(isVisible) {
		AppDispatcher.handleViewAction({
			actionType: CartConstants.CART_VISIBLE,
			isVisible
		});
	}
};

module.exports = CartActionsActions;
