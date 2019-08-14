
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import { List, ListItem } from "./List";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from '../img/wishywashylogo.png'

class HelloManager extends Component {
  state = {
    job: "0",
    manager: { Jobs: [] }
  }

  componentDidMount() {
    localStorage.getItem('jwtToken')
    const { auth } = this.props;
    API.getManager(auth.user.id)
      .then((manager) => {
        this.setState({ manager: manager.data })
        console.log(this.state.manager)
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
    const { auth } = this.props;

    return (
      <div>
        <h2>Manager Dashboard</h2>
        <Link to="/Manager/newJob">
          <button>Make a new Job!</button>
        </Link>
        <form onSubmit={this.handleFormSubmit}>
          <label>Delete a job: </label>
          <input onChange={this.onChanges} type="number" name="job" min="1" max="99" />
          <input type="submit"/>
        </form>
        {auth.isAuthenticated ?
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
                    img={this.state.manager.image ? this.state.manager.image : logo}
                  />
                </Link>
              )
            })}
          </List> :
          <p>there was a problem loading your jobs</p>
        }
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
