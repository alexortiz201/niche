import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

import logo from './logo.svg';
import './Home.css';
import UserRepos from '../containers/UserRepos';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-title">Welcome to React</h1>
        </header>
        <Container>
	        <Button color="danger">Danger!</Button>
	        <p className="Home-intro">
	          To get started, edit <code>src/Home.js</code> and save to reload.
	        </p>
	        <UserRepos username="alexortiz201" />
        </Container>
      </div>
    );
  }
}

export default Home;
