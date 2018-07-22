import React from 'react';
import { shallow } from 'enzyme';
import { Button, Container } from 'reactstrap';
import User from '../index';
import UserContainer from '../containers/User';

it('renders welcome message', () => {
    const wrapper = shallow(<User />);
    const welcome = <Container>
        <Button color="danger">Danger!</Button>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
        <User username="alexortiz201" />
      </Container>;
    expect(wrapper.contains(welcome)).toEqual(true);
});
