
import React from 'react';
import GoalButton from './childrens/GoalButton/GoalButton';

const defaultProps = {
	team: {}
};

const propTypes = {
	team: React.PropTypes.shape({ name: React.PropTypes.string.isRequired }),
	score: React.PropTypes.number.isRequired,
	updateScore: React.PropTypes.func.isRequired
};

export default class Team extends React.Component {
	render() {
		return (
			<div>
				<h1>{ this.props.team.name }</h1>
				<div>{ this.props.score }</div>
				<GoalButton updateScore={ this.props.updateScore } />
			</div>
		);
	}
}

Team.defaultProps = defaultProps;
Team.propTypes = propTypes;
