import React from 'react';

import ProductsStore from './CartStore/stores/ProductsStore';
import CartStore from './CartStore/stores/CartStore';
import ProductsComponent from './CartStore/components/Products';
import CartComponent from './CartStore/components/Cart';

export default class Application extends React.Component {
	constructor() {
		super();
		this.state = getApplicationState();
	}

	componentDidMount() {
		ProductsStore.addChangeListener(this.onChange.bind(this));
		CartStore.addChangeListener(this.onChange.bind(this));
	}

	// Remove change listener from store
	componentWillUnmount() {
		ProductsStore.removeChangeListener(this.onChange.bind(this));
		CartStore.removeChangeListener(this.onChange.bind(this));
	}

	// Update state when store change
	onChange() {
		this.setState(getApplicationState());
	}

	render() {
		return (
			<div className="container">
				<h1 className="text-center">Beer Shopping App</h1>
				<CartComponent cart={ this.state.cart } />
				<ProductsComponent products={ this.state.products } />
			</div>
		);
	}
}

function getApplicationState() {
	return {
		products: ProductsStore.getProducts(),
		cart: {
			items: CartStore.getCartItems(),
			amount: CartStore.getCartAmount(),
			total: CartStore.getCartTotal(),
			isVisible: CartStore.getCartVisible()
		}
	};
}
