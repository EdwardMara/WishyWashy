
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import API from '../utils/API';

class HelloManager extends Component {
  state = {
    manager: {}
  }

  componentDidMount() {
    const { auth } = this.props;
    API.getManager(auth.user.id)
    .then((manager) => {
      this.setState({manager: manager.data})
    })
    .catch()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.setState({ auth: nextProps.auth });
    }
  }

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    let state = this.state;
    return (
      <div>
        <h2>Manager Dashboard</h2>
        <Link to="/helloManager/newJob">
        <button>Make a new Job!</button>
        </Link>
        <h4>Jobs:</h4>
        {/* TODO: grab their jobs */}
      </div>
    );
  }
}

HelloManager.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(HelloManager);
