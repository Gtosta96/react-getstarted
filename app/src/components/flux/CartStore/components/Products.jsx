import React from 'react';
import CartActions from '../actions/CartActions';
import ProductsMock from '../mocks/Products';
import Product from './Product';

export default class Products extends React.Component {

	static loadProducts() {
		setTimeout(CartActions.loadProducts.bind(null, ProductsMock.load()));
	}

	static addProduct(product) {
		CartActions.addToCart(product);
	}

	componentDidMount() {
		this.constructor.loadProducts();
	}

	renderProducts() {
		return (
			this.props.products.map(product =>
				<Product
					key={ product.id }
					product={ product }
					addProduct={ this.constructor.addProduct }
				/>
			)
		);
	}

	render() {
		return (
			<div className="row">
				{this.renderProducts()}
			</div>
		);
	}
}

const defaultProps = {
	products: []
};

const propTypes = {
	products: React.PropTypes.array.isRequired
};

Products.defaultProps = defaultProps;
Products.propTypes = propTypes;
