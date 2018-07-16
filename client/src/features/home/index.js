import React, { Component } from 'react';
import { Container } from 'reactstrap';
import UserRepos from './containers/UserRepos';

class Home extends Component {
	render() {
		return (
			<div id="home">
				<Container>
					<h2 className="text-center">Home</h2>
					<UserRepos username="alexortiz201" />
				</Container>
			</div>
		);
	}
}

export default Home;
