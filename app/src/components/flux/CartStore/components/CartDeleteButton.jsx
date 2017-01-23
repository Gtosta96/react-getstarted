import React from 'react';

export default class CartDeleteButton extends React.Component {
	constructor() {
		super();

		this.removeProduct = this.removeProduct.bind(this);
	}

	removeProduct() {
		const product = this.props.product;
		this.props.removeProduct(product);
	}

	render() {
		return (
			<button
				className="btn btn-danger btn-block"
				onClick={ this.removeProduct }
			>
				Remove
		</button>
		);
	}
}

const defaultProps = {};

const propTypes = {
	product: React.PropTypes.object.isRequired,
	removeProduct: React.PropTypes.func.isRequired
};

CartDeleteButton.defaultProps = defaultProps;
CartDeleteButton.propTypes = propTypes;
