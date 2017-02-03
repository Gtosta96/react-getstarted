import React, { Component } from 'react';

class Events extends Component {
	constructor() {
		super();

		this.state = { currentEvent: '-' };
		this.onUpdate = this._onUpdate.bind(this);
	}

	_onUpdate(event) {
		this.setState({ currentEvent: event.type });
	}

	render() {
		return (
			<div>
				<textarea
					onKeyDown={ this.update }
					onCopy={ this.update }
					onCut={ this.onUpdate }
					onPaste={ this.onUpdate }
					onBlur={ this.onUpdate }
					onFocus={ this.onUpdate }
					onDoubleClick={ this.onUpdate }
					onTouchStart={ this.onUpdate }
					onTouchMove={ this.onUpdate }
					onTouchEnd={ this.onUpdate }
					cols="30"
					rows="10"
				/>
				<h1> { this.state.currentEvent } </h1>
			</div>
		);
	}
}

export default Events;
