/* eslint-disable react/jsx-no-bind */

import React from 'react';

import Team from './childrens/Team/Team';
import Match from './childrens/Match/Match';

import ScoreboardState from './data/scoreboardState';

const defaultProps = {
	scoreboard: {}
};

const propTypes = {
	scoreboard: React.PropTypes.shape({
		houseTeam: React.PropTypes.object.isRequired,
		visitorTeam: React.PropTypes.object.isRequired,
		match: React.PropTypes.object.isRequired
	})
};

export default class ScoreboardContainer extends React.Component {
	constructor() {
		super();

		const scoreboardState = ScoreboardState;
		this.state = scoreboardState;
	}

	updateHouseScore() {
		const state = { houseScore: this.state.houseScore + 1 };
		this.setState(state);
	}

	updateVisitorScore() {
		const state = { visitorScore: this.state.visitorScore + 1 };
		this.setState(state);
	}

	render() {
		return (
			<div>

				<Team
					team={ this.props.scoreboard.houseTeam }
					score={ this.state.houseScore }
					updateScore={ this.updateHouseScore.bind(this) }
				/>

				<Match
					match={ this.props.scoreboard.match }
				/>

				<Team
					team={ this.props.scoreboard.visitorTeam }
					score={ this.state.visitorScore }
					updateScore={ this.updateVisitorScore.bind(this) }
				/>

			</div>
		);
	}
}

ScoreboardContainer.defaultProps = defaultProps;
ScoreboardContainer.propTypes = propTypes;
