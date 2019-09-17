import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import TextFieldGroup from "./TextFieldGroup";

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
    this.setState({ [event.target.name]: event.target.value })
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
        window.location.assign('/helloManager')
      })
      .catch(err => this.setState({ error: err.message }))
  }

  render() {

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <form noValidate onSubmit={this.handleFormSubmit} className="form-login">
                <TextFieldGroup
                  placeholder="Company Name"
                  name="companyName"
                  value={this.state.companyName}
                  onChange={this.handleInputChange}
                />
                <TextFieldGroup
                  placeholder="Position"
                  name="position"
                  value={this.state.position}
                  onChange={this.handleInputChange}
                />
                <TextFieldGroup
                  placeholder="Address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                />
                <TextFieldGroup
                  placeholder="Pay (example: $15/hr)"
                  name="pay"
                  value={this.state.pay}
                  onChange={this.handleInputChange}
                />
                <TextFieldGroup
                  placeholder="Hours"
                  name="hours"
                  value={this.state.hours}
                  onChange={this.handleInputChange}
                />
                <input type="submit" className="btn btn-primary btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
      // <div>
      //     <form>
      //         <label for="companyName">Company Name: </label>
      //         <input name="companyName" type="text" onChange={this.handleInputChange}/><br />
      //         <label for="position">Position needed: </label>
      //         <input name="position" type="text" onChange={this.handleInputChange}/><br />
      //         <label for="address">Address: </label>
      //         <input name="address" type="text" onChange={this.handleInputChange}/><br />
      //         <label for="pay">Pay: </label>
      //         <input name="pay" type="text" onChange={this.handleInputChange}/><br />
      //         <label for="hours">Hours: </label>
      //         <input name="hours" type="text" onChange={this.handleInputChange}/><br />
      //         <button type="submit" onClick={this.handleFormSubmit}>
      //             Submit
      //         </button>
      //     </form>
      // </div>
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

