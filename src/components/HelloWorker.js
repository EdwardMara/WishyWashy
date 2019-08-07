
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class HelloWorker extends Component {
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.setState({ auth: nextProps.auth });
    }
  }

  render() {
    console.log(this.props);
    const { auth } = this.props;

    return (
      <div>
        Hello Worker: {auth.user.email} 
      </div>
    );
  }
}

HelloWorker.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(HelloWorker);
