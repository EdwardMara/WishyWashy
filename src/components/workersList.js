import React, { Component } from "react";
import { WorkerUList, WorkerListItem } from "./workerListItem";
import { connect } from 'react-redux';
import API from "../utils/API";
import { Link } from 'react-router-dom';
import image from "../img/wishywashylogo.png";

class WorkerList extends Component {
  state = {
    jobId: this.props.match.params.id,
    job: { Workers: [] }
  }

  componentDidMount() {
    API.workerGrab(this.state.jobId)
      .then((job) => {
        this.setState({ job: job.data })
        console.log(this.state.job)
      })
      
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.setState({ auth: nextProps.auth });
    }
  }

  handleOnClick = () => {
    this.state.job.filled = true
    API.jobFill(this.state.job)
    .then(console.log('job updated'))
  }

  handleDelete = () => {
    API.deleteJob(this.state.job.id).then(
      console.log('deleted')
    ).catch()
  }

  render() {
    return (
      <div>
        <WorkerUList>
          {this.state.job.Workers.map(worker => {
            console.log(worker)
            return (
              <Link to="/helloManager">
                <WorkerListItem
                  name={worker.firstName + " " + worker.lastName}
                  address={worker.address}
                  email={worker.email}
                  phone={worker.phone}
                  handleClick = {this.handleOnClick()}
                  image={image}
                />
              </Link>
            )
          })}
        </WorkerUList>
        <Link to="/helloManager">
          <button className="btn starter-buttons" handleClick={this.handleDelete()}>I want to delete this job.</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(WorkerList);