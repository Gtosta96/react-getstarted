import React from 'react';

const defaultProps = {
	match: {}
};

const propTypes = {
	match: React.PropTypes.shape({
		time: React.PropTypes.string.isRequired,
		local: React.PropTypes.string.isRequired
	})
};

export default class Match extends React.Component {
	render() {
		return (
			<div>
				<span>{ this.props.match.time }</span> - <span>{ this.props.match.local }</span>
			</div>
		);
	}
}

Match.defaultProps = defaultProps;
Match.propTypes = propTypes;
