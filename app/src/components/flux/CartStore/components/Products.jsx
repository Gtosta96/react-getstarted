import React from 'react';
import CartActions from '../actions/CartActions';
import ProductsMock from '../mocks/Products';
import Product from './Product';

export default class Products extends React.Component {

	// Load products when the component render
	componentDidMount() {
		this.loadProducts();
	}

	// Request products from somewhere
	loadProducts() {
		setTimeout(CartActions.loadProducts.bind(null, ProductsMock.load()));
	}

	// Add Product action
	addProduct(product) {
		CartActions.addToCart(product);
	}

	renderProducts() {
		return this.props.products.map(product =>
			<Product
				key={ product.id }
				product={ product }
				addProduct={ this.addProduct }
			/>
		);
	}

	// Render product view
	render() {
		return (
			<div className="row">
				{this.renderProducts()}
			</div>
		);
	}
}
