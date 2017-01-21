import React from 'react';
import CartActions from '../actions/CartActions';

export default class Cart extends React.Component {
	static removeProduct(product) {
		CartActions.removeFromCart(product);
	}

	constructor(props) {
		super(props);

		// this.removeProduct = this.constructor.removeProduct.bind(this);
		this.toggleCartDisplay = this.toggleCartDisplay.bind(this);
	}

	toggleCartDisplay() {
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
						onClick={ () => this.constructor.removeProduct(products[product]) }
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
					<button
						className="btn btn-lg btn-danger"
						onClick={ this.toggleCartDisplay }
					>
						Show Cart ({ this.props.cart.amount })
					</button>
				</div>

				<div className={ this.props.cart.isVisible ? 'cart-container' : 'cart-container hidden' }>

					<button
						className="glyphicon glyphicon-remove close-btn"
						onClick={ this.toggleCartDisplay }
					/>

					<ul>{ this.renderProductsList() }</ul>

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
		items: React.PropTypes.object.isRequired,
		total: React.PropTypes.number.isRequired,
		amount: React.PropTypes.number.isRequired,
		isVisible: React.PropTypes.bool.isRequired
	})
};

Cart.defaultProps = defaultProps;
Cart.propTypes = propTypes;
