
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import API from '../utils/API';

class HelloManager extends Component {
  state = {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.setState({ auth: nextProps.auth });
    }
  }

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const job = {
      companyName: this.state.companyName,
      position: this.state.position,
      address: this.state.address,
      pay: this.state.pay,
      hours: this.state.hours,
      ManagerId: this.state.auth.user.id
    }
    console.log(job)
    // API.postJob()
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(err => this.setState({ error: err.message}))
  }

  render() {
    const { auth } = this.props;
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
