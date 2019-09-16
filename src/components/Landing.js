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
  marginBottom: '40%'
};

class Landing extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div style={carStyle} id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={dishpit} alt="First slide" />
              <div style={carouselText} class="carousel-caption d-none d-md-block">
                <h1>No call. No Show. No Problem.</h1>
                <p>Essential personnel, when you need it</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={prep} alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Insure you're properly staffed for peak hours.</h5>
                <p>Only pay for the hours you need.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={glasses} alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Recruit dishwashers, prepcooks, and other boh staff now!</h5>
                <p>...</p>
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
          <div class="loginContent">
            <h1>Take a Job!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non libero congue, luctus quam sit amet, tristique augue. Sed id dui suscipit, faucibus leo quis, ornare tellus. Morbi eu congue lorem. Aenean posuere eget ante at accumsan. Pellentesque consectetur gravida libero et ultricies. Pellentesque non eros dictum metus lacinia lacinia et sit amet diam. In malesuada, orci vel auctor viverra, lectus massa feugiat mauris, in commodo lacus odio nec augue. Sed sit amet gravida nisi, id scelerisque magna. Integer eleifend turpis varius lectus volutpat sagittis. Morbi sed posuere nulla, at tempus ligula. Curabitur cursus ex eget odio varius faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque metus mi, tincidunt at feugiat sed, sollicitudin vitae massa.</p>
          </div>
        </div>
        {/* Manager Login */}
        <div class="loginCard">
          <div class="loginButton">
            <Link to="/loginManager" className="btn starter-buttons">
              Manager Login
            </Link>
          </div>
          <div class="loginContent">
            <h1>Post a Job!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non libero congue, luctus quam sit amet, tristique augue. Sed id dui suscipit, faucibus leo quis, ornare tellus. Morbi eu congue lorem. Aenean posuere eget ante at accumsan. Pellentesque consectetur gravida libero et ultricies. Pellentesque non eros dictum metus lacinia lacinia et sit amet diam. In malesuada, orci vel auctor viverra, lectus massa feugiat mauris, in commodo lacus odio nec augue. Sed sit amet gravida nisi, id scelerisque magna. Integer eleifend turpis varius lectus volutpat sagittis. Morbi sed posuere nulla, at tempus ligula. Curabitur cursus ex eget odio varius faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque metus mi, tincidunt at feugiat sed, sollicitudin vitae massa.</p>
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
