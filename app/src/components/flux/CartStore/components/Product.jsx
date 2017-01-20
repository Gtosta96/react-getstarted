/* eslint-disable react/jsx-no-bind */

import React from 'react';

export default class Product extends React.Component {

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
					onClick={ this.props.addProduct.bind(null, this.props.product) }
					className="btn btn-lg btn-block btn-danger"
				>
					Add to Cart
				</button>
			</div>
		);
	}
}
