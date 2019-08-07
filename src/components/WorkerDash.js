import React, { Component } from "react";
import { List, ListItem } from "./List";
// import API from "../utils/API";
import jobs from "./jobs.json";



class WorkerDash extends Component {
    state = {
        jobs
    };
    // componentDidMount() {
    //     this.loadJobs();
    // };

    // loadJobs = () => {
    //     API.getJobs()
    //         .then(res =>
    //             this.setState({ jobs: res.data })
    //         )
    //         .catch(err => console.log(err));
    // };

    render() {
        return (
                <List>
                    {jobs.map(job => {
                        console.log(job)
                        return (
                            <ListItem
                                key={job.id}
                                position={job.position}
                                img={job.img}
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