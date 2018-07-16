import React from 'react';
import { shallow } from 'enzyme';
import { Container } from 'reactstrap';
import Home from '../index';
import UserRepos from '../containers/UserRepos';

it('renders welcome message', () => {
    const wrapper = shallow(<Home />);
    const welcome = <div id="home">
				<Container>
					<h2 className="text-center">Home</h2>
					<UserRepos username="alexortiz201" />
				</Container>
			</div>;
    expect(wrapper.contains(welcome)).toEqual(true);
});
