import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import API from '../utils/API';

class NewJobForm extends Component {
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
      console.log(this.state)
      const { auth } = this.props;
      const job = {
        companyName: this.state.companyName,
        position: this.state.position,
        address: this.state.address,
        pay: this.state.pay,
        hours: this.state.hours,
        ManagerId: auth.user.id
      }
      API.postJob(job)
      .then(res => {
        console.log(res)
      })
      .catch(err => this.setState({ error: err.message}))
    }

    render() {
        
    return (
        <div>
            <form>
                <label for="companyName">Company Name: </label>
                <input name="companyName" type="text" onChange={this.handleInputChange}/><br />
                <label for="position">Position needed: </label>
                <input name="position" type="text" onChange={this.handleInputChange}/><br />
                <label for="address">Address: </label>
                <input name="address" type="text" onChange={this.handleInputChange}/><br />
                <label for="pay">Pay: </label>
                <input name="pay" type="text" onChange={this.handleInputChange}/><br />
                <label for="hours">Hours: </label>
                <input name="hours" type="text" onChange={this.handleInputChange}/><br />
                <button type="submit" onClick={this.handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
    }
}


NewJobForm.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(NewJobForm);
  
