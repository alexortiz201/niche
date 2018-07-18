import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// common components
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';

export const RoutesWrapperFactory = ({ store, history, routes } = {}) => {
	return (<Provider store={store}>
	  <ConnectedRouter history={history}>
		<div className="App">
		  <Header />
		  <div className="wrap">
				{ routes }
		  </div>
		  <Footer />
		</div>
	  </ConnectedRouter>
	</Provider>);
};

RoutesWrapperFactory.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
};

export default {
	RoutesWrapperFactory
};
