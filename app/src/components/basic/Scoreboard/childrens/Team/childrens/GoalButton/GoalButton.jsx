import React from 'react';

const propTypes = {
	updateScore: React.PropTypes.func.isRequired
};

export default class GoalButton extends React.Component {
	render() {
		return (
			<button onClick={ this.props.updateScore }>Gol!</button>
		);
	}
}

GoalButton.propTypes = propTypes;
