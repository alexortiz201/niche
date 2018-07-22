import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import logo from './logo.svg';
import './User.css';
import UserContainer from '../containers/User';

class User extends Component {
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
	        <UserContainer username="alexortiz201" />
        </Container>
      </div>
    );
  }
}

export default User;
