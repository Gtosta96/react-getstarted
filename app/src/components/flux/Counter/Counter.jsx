/* eslint-disable react/jsx-no-bind */

import React from 'react';

export default class Counter extends React.Component {

	constructor() {
		super();

		const state = { count: 0 };
		this.state = state;
	}

	decrement() {
		const change = { count: this.state.count - 1 };
		this.setState(change);
	}

	increment() {
		const change = { count: this.state.count + 1 };
		this.setState(change);
	}

	render() {
		return (
			<div>
				<h3>{ this.state.count }</h3>
				<div>
					<button type="button" onClick={ this.decrement.bind(this) }>-</button>
					<button type="button" onClick={ this.increment.bind(this) }>+</button>
				</div>
			</div>
		);
	}
}
