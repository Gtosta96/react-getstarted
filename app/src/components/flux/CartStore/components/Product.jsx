import React from 'react';

export default class Product extends React.Component {

	addProduct() {
		const product = this.props.product;
		this.props.addProduct(product);
	}

	render() {
		return (
			<div className="col-md-3">
				<h4 className="text-center">{ this.props.product.name }</h4>
				<img
					src={ this.props.product.image }
					alt={ this.props.product.name }
					className="img-responsive img-thumbnail"
				/>
				<p><b>Price:</b>{ this.props.product.price }</p>
				<p><b>Quantity:</b>{ this.props.product.inventory }</p>

				<button
					onClick={ this.props.addProduct }
					className="btn btn-lg btn-block btn-danger"
				>
					Add to Cart
				</button>
			</div>
		);
	}
}

const defaultProps = {
	product: {}
};

const propTypes = {
	product: React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		image: React.PropTypes.string.isRequired,
		price: React.PropTypes.number.isRequired,
		inventory: React.PropTypes.number.isRequired
	}),
	addProduct: React.PropTypes.func.isRequired
};

Product.defaultProps = defaultProps;
Product.propTypes = propTypes;
