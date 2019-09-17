import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import logo from '../img/wishywashylogo.png';
import dishpit from '../img/dishpit.jpeg';
import prep from '../img/potatos.jpeg';
import glasses from '../img/glasses.jpeg';
import "../reset.css";
import { white } from 'material-ui/styles/colors';


const carStyle = {
  width: '100%',
  margin: 0,
  padding: 0,
};

const carouselText = {
  color: 'white',
  background: `rgba(${0}, ${0}, ${0}, ${.5})`,
  padding: '10px',
  marginBottom: '40%',
  fontSize: '2em',
  fontFamily: 'Manjari'
};

class Landing extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div style={carStyle} id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={dishpit} alt="First slide" />
              <div style={carouselText} class="carousel-caption col-sm-4">
                <h1>No call. No Show. No Problem.</h1>
                <p>Essential personnel, when you need it</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={prep} alt="Second slide" />
              <div style={carouselText} class="carousel-caption col-sm-3 d-none d-md-block">
                <h5>Ensure you're properly staffed for peak hours.</h5>
                <p>Only pay for the hours you need.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={glasses} alt="Third slide" />
              <div style={carouselText}  class="carousel-caption col-sm-3 d-none d-md-block">
                <h5>Recruit dishwashers, prepcooks, and other BOH staff now!</h5>
                
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        {/* worker login */}
        <div class="loginCard firstCard">
          <div class="loginButton">
            <Link to="/loginWorker" className="btn starter-buttons">
              Worker Login
            </Link>
          </div>
          <div class="loginContent rightJustify">
            <h1>Shift Applicants</h1>
            <br />
            <ul>
              <li>Apply for a shift</li>
              <li>Upload relevent documents</li>
              <li>Make some dough</li>
            </ul>
          </div>
        </div>
        {/* Manager Login */}
        <div class="loginCard">
          <div class="loginContent leftJustify">
            <h1>Managers</h1>
            <br />
            <ul>
              <li>Post a shift</li>
              <li>Review/approve potential applicants</li>
              <li>Keep your business running smoothly</li>
            </ul>
          </div>
          <div class="loginButton" id="picture2">
            <Link to="/loginManager" className="btn starter-buttons">
              Manager Login
            </Link>
          </div>
        </div>
        {/* <div className="row">
          <div className="text-center form-login landing-size">
            <Link to="/loginWorker" className="btn starter-buttons">
              Worker Login
            </Link>
            <Link to="/loginManager" className="btn starter-buttons">
              Manager Login
            </Link>
          </div>
        </div> */}
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
