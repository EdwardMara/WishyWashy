import React, { Component } from "react";
import { List, ListItem } from "./workerListItem";
import { connect } from 'react-redux';
import API from "../utils/API";

class WorkerList extends Component {
    state = {
      jobId: this.props.match.params.id,
      workers: []
    }

    componentDidMount() {
      API.
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth) {
          this.setState({ auth: nextProps.auth });
        }
      }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps)(WorkerList);