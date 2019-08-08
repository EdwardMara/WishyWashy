
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import { List, ListItem } from "./List";

class HelloManager extends Component {
  state = {
    manager: {Jobs:[]}
  }

  componentDidMount() {
    const { auth } = this.props;
    API.getManager(auth.user.id)
      .then((manager) => {
        this.setState({ manager: manager.data })
        console.log(this.state.manager.Jobs)
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

  handleOnClick = event => {
    //TODO: associate work and job
  }

  render() {
    return (
      <div>
        <h2>Manager Dashboard</h2>
        <Link to="/helloManager/newJob">
          <button>Make a new Job!</button>
        </Link>
        <List>
          {this.state.manager.Jobs.map(job => {
            console.log(job)
            return (
              <ListItem
                key={job.id}
                position={job.position}
                address={job.address}
                pay={job.pay}
                hours={job.hours}
                handleClick={this.handleOnClick}
              />
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
