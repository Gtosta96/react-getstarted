import React, { Component } from 'react';

class Childrens extends Component {
	render() {
		return (
			<div>
				<Button>I <Heart /> React! </Button>
			</div>
		);
	}
}

const Button = props => <button>{ props.children }</button>;
const Heart = () => <span>&hearts;</span>;

Button.propTypes = {
	children: React.PropTypes.string.isRequired
};

export default Childrens;
