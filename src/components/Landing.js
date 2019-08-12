import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center form-login landing-size">
            <Link to="/loginWorker" className="btn starter-buttons">
              Worker Login
            </Link>
            <Link to="/loginManager" className="btn starter-buttons">
              Manager Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
