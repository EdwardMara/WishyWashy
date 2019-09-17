
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
        <Link to="/Manager/newJob">
          <button class="btn starter-buttons">Make a new Job!</button>
        </Link>
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
          <div>
            <p>Uh Oh! There was a problem loading your jobs. You may need to log in again.</p>

            <Link to={"/loginManager"} className="btn starter-buttons">
              Manager Login
          </Link>
          </div>
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
