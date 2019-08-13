
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import { List, ListItem } from "./List";
import { BrowserRouter as Router, Route } from "react-router-dom";

class HelloManager extends Component {
  state = {
    job: "0",
    manager: { Jobs: [] }
  }

  componentDidMount() {
    const { auth } = this.props;
    API.getManager(auth.user.id)
      .then((manager) => {
        this.setState({ manager: manager.data })
      })
      .catch()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.setState({ auth: nextProps.auth });
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    API.deleteJob(this.state.manager.Jobs[this.state.job - 1].id).then(
      console.log('deleted')
    ).catch()
  }

  render() {
    return (
      <div>
        <h2>Manager Dashboard</h2>
        <Link to="/Manager/newJob">
          <button>Make a new Job!</button>
        </Link>
        <form onSubmit={this.handleFormSubmit}>
          <label>Delete a job: </label>
          <input onChange={this.onChanges} type="number" name="job" min="1" max={String(this.state.manager.Jobs.length)} />
          <input type="submit"/>
        </form>
        <List>
          {this.state.manager.Jobs.map(job => {
            return (
              <Link to={`/Manager/workerList/${job.id}`}>
                <ListItem
                  key={job.id}
                  indentifier={job.id}
                  position={job.position}
                  address={job.address}
                  pay={job.pay}
                  hours={job.hours}
                />
              </Link>
            )
          })}
        </List>
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
