import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerManager } from "../actions/authActions";
import TextFieldGroup from "./TextFieldGroup";
import ReactFilestack from 'filestack-react';

// TODO: link image url from filestack to state and manager constructor

class RegisterManager extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      companyName: "",
      address: "",
      phone: "",
      email: "",
      password: "",
      password2: "",
      image: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newManager = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      companyName: this.state.companyName,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      image: this.state.image
    };

    this.props.registerManager(newManager, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <form noValidate onSubmit={this.onSubmit} className="form-login">
                <TextFieldGroup
                  placeholder="First Name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  error={errors.firstName}
                />
                <TextFieldGroup
                  placeholder="Last Name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  error={errors.lastName}
                />
                <TextFieldGroup
                  placeholder="Company"
                  name="companyName"
                  value={this.state.companyName}
                  onChange={this.onChange}
                  error={errors.companyName}
                />
                <TextFieldGroup
                  placeholder="Address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  error={errors.address}
                />
                <TextFieldGroup
                  placeholder="Phone"
                  name="phone"
                  type="tel"
                  value={this.state.phone}
                  onChange={this.onChange}
                  error={errors.phone}
                />
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <ReactFilestack
                  apikey={"AC0wjdv5JTa3WfKjaU2wnz"}
                  componentDisplayMode={{
                    type: 'button',
                    customText: 'Upload Image',
                    customClass: 'some-custom-class'
                  }}
                  onSuccess={(res) => {
                    console.log(res);
                    let imageUrl = res.filesUploaded[0].url;
                    console.log(imageUrl);
                    this.setState({ image: imageUrl });
                  }}
                />

                <input type="submit" className="btn btn-primary btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegisterManager.propTypes = {
  registerManager: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerManager })(withRouter(RegisterManager));
