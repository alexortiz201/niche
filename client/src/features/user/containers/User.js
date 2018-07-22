import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	doUser
} from '../actions/doUser';
import { bindActionCreators } from 'redux';

class UserContainer extends Component {
	componentDidMount() {
		let username = this.props.username;
		this.props.doUser(username);
	}

	render() {
		let { user } = this.props;
		let pageContent = '';

		if (this.props.loading) {
      pageContent = (
        <div className="userLoader">
          Loading...
        </div>
      )
		} else {
			pageContent = (
				<ul className="repos">
					{JSON.stringify(user)}
				</ul>
			)
		}

		return (
			<div>
				<h3>Github Projects</h3>
				{pageContent}
			</div>
		);
	}
}

UserContainer.propTypes = {
	user: PropTypes.object
};

const mapStateToProps = state => {
	return {
		user: state.user.userInfo.user,
		loading: state.user.userInfo.isLoading
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		doUser
	}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
