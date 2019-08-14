import React, { Component } from "react";
import { List, ListItem } from "./List";

import { connect } from 'react-redux';

import jobs from "./jobs.json";
import API from "../utils/API";
import logo from '../img/wishywashylogo.png'



class WorkerDash extends Component {
    state = {
        jobs,
        jobList: [],
        worker: {}
    };

    componentDidMount() {
        this.loadJobs();
        const { auth } = this.props;
        API.getWorker(auth.user.id)
            .then((worker) => {
                this.setState({ worker: worker.data })
            })
            .catch()

    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth) {
            this.setState({ auth: nextProps.auth });
        }
    }

    loadJobs = () => {
        API.getJoblist()
            .then(res =>
                this.setState({ jobList: res.data })
            )
            .catch(err => console.log(err));
    };

    handleOnClick = (job) => {
        API.takeJob(job, this.state.worker.id)
            .then(
                console.log('connection made')
            )
            .catch()
    }


    render() {
        return (
            <List>
                {this.state.jobList.map(job => {
                    return (
                        <ListItem
                            key={job.id}
                            identifier={job.id}
                            position={job.position}
                            img={job.image ? job.image : logo}
                            address={job.address}
                            pay={job.pay}
                            hours={job.hours}
                            handleClick={this.handleOnClick}
                        />
                    )
                })}
            </List>


        )
    }


}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(WorkerDash);