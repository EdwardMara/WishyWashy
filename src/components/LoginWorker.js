import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { loginWorker } from '../actions/authActions';
import TextFieldGroup from './TextFieldGroup';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class LoginWorker extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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

    this.props.loginWorker(data, this.props.history);
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
              <form onSubmit={this.onSubmit} className="form-login">
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
                <input type="submit"/>
                <Button
                  component={Link}
                  // className={classes.button}
                  raised
                  to="/registerWorker"
                >
                  {'Register'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginWorker.propTypes = {
  loginWorker: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginWorker })(withRouter(LoginWorker));
