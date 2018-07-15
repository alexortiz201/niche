import React from 'react';
import { shallow } from 'enzyme';
import Home from './home/Home';

it('renders welcome message', () => {
    const wrapper = shallow(<Home />);
    const welcome = <h1 className="Home-title">
        Welcome to React
    </h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
});
