import React, { Component } from "react";
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginManager } from "../actions/authActions";
import TextFieldGroup from "./TextFieldGroup";
import Link from 'react-router/lib/Link';
// import { withStyles, createStyleSheet } from 'material-ui/styles';
// import Typography from 'material-ui/Typography';
import Button from 'material-ui/core/Button';
// import muiLogo from 'docs/src/assets/images/material-ui-logo.svg';

class LoginManager extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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

  onSubmit(evt) {
    evt.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginManager(data, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Log in to your Manager account
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Email Address"
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
                <input type="submit" className="btn btn-primary btn-block mt-4" />
                <Button
                  component={Link}
                  className={classes.button}
                  raised
                  to="/WishyWashy/registerManager"
                >
                  {'Register'}
                </Button>
                {/* <a href="WishyWashy/registerManager">Register</a> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginManager.propTypes = {
  loginManager: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginManager })(withRouter(LoginManager));
