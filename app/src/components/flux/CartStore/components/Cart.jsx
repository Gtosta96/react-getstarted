import React from 'react';
import CartActions from '../actions/CartActions';

export default class Cart extends React.Component {

	static removeProduct(productId) {
		CartActions.removeFromCart(productId);
	}

	toggleCartDisplay(e) {
		e.preventDefault();
		CartActions.toggleCartVisible(!this.props.cart.isVisible);
	}

	renderProductsList() {
		const products = this.props.cart.items;

		return Object.keys(products).map((product) => {
			const li = (
				<li key={ products[product].id }>
					<p className="beer-name">{products[product].name}</p>
					<p>{ products[product].amount } x $ { products[product].price }</p>
					<button
						className="btn btn-danger btn-block"
						onClick={ this.constructor.removeProduct.bind(null, products[product]) }
					>
						Remove
					</button>
				</li>
			);

			return li;
		});
	}

	render() {
		return (
			<div className="row cart-component">
				<div className="text-center">
					<a
						href="#"
						className="btn btn-lg btn-danger"
						onClick={ this.toggleCartDisplay.bind(this) }
					>
						Show Cart ({ this.props.cart.amount })
					</a>
				</div>

				<div className={ this.props.cart.isVisible ? 'cart-container' : 'cart-container hidden' }>

					<a
						href="#"
						className="glyphicon glyphicon-remove close-btn"
						onClick={ this.toggleCartDisplay.bind(this) }
					/>

					<ul>
						{this.renderProductsList()}
					</ul>

					<div className="total">Total: { this.props.cart.total }</div>
				</div>
			</div>
		);
	}
}

const defaultProps = {
	cart: {
		items: []
	}
};

const propTypes = {
	cart: React.PropTypes.shape({
		items: [],
		total: React.PropTypes.number.isRequired,
		amount: React.PropTypes.number.isRequired,
		isVisible: React.PropTypes.bool.isRequired,
	})
};

Cart.defaultProps = defaultProps;
Cart.propTypes = propTypes;
