import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getJoblist: function() {
    return axios.get("https://wishywashy-api.herokuapp.com/api/joblist");
  },
  postJob: function(object) {
    return axios.post("https://wishywashy-api.herokuapp.com/api/createJob", object);
  },
  getManager: function(id) {
    return axios.get(`https://wishywashy-api.herokuapp.com/api/profile/manager/${id}`)
  },
  takeJob: function(jobid, workerid) {
    return axios.get(`https://wishywashy-api.herokuapp.com/api/takejob/${jobid}/${workerid}`)
  },
  getWorker: function(id) {
    return axios.get(`https://wishywashy-api.herokuapp.com/api/profile/worker/${id}`)
  },
  workerGrab: function(id) {
    return axios.get(`https://wishywashy-api.herokuapp.com/api/job/workers/${id}`)
  },
  jobFill: function(job) {
    return axios.put(`https://wishywashy-api.herokuapp.com/api/filljob`, job)
  },
  deleteJob: function(id) {
    return axios.delete(`https://wishywashy-api.herokuapp.com/api/deletejob/${id}`)
  }
};