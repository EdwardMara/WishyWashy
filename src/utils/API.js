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
  }
};