import React, { Component } from "react";
import { List, ListItem } from "./List";
// import API from "../utils/API";
import jobs from "./jobs.json";
import API from "../utils/API";



class WorkerDash extends Component {
    state = {
        jobs,
        jobList: []
    };
    componentDidMount() {
        this.loadJobs();
    };

    loadJobs = () => {
        API.getJoblist()
            .then(res =>
                this.setState({ jobList: res.data })
            )
            .catch(err => console.log(err));
    };


    render() {
        return (
                <List>
                    {this.state.jobList.map(job => {
                        return (
                            <ListItem
                                key={job.id}
                                position={job.position}
                                img={this.state.jobs[0].img}
                                address={job.address}
                                pay={job.pay}
                                hours={job.hours}
                            />
                        )
                    })}
                </List>
          

        )
    }


}


export default WorkerDash;