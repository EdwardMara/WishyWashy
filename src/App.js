import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/index'



class App extends Component{

  state ={
    role: "employer"
  }
  // control the role and render diferent page base on the role
  // call to the backend  return from the db all the jobs
  // update state jobs with the data comming from the db then you will render result

  render () {
    return(
    <div>
    <Navbar
     role= {this.state.role}
    >
     </Navbar>
    </div>
    )};


}
export default App;
