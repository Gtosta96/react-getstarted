import React, { Component } from 'react';

class ChangeState extends Component {
	constructor() {
		super();

		this.state = {
			txt: ''
		};

		this.onKeyUp = this._onKeyUp.bind(this);
	}

	_onKeyUp(e) {
		this.setState({ txt: e.target.value });
	}

	render() {
		return (
			<div>
				<input placeholder="Write something here!" onKeyUp={ this.onKeyUp } /> { this.state.txt }
			</div>
		);
	}
}

export default ChangeState;
