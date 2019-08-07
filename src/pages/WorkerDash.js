import React, { Component } from "react";
import { List } from "../components/List";
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
            <List />
        )
    }


}


export default WorkerDash;