import React, { Component } from 'react';
import { Table, Grid, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

//my components
import MyNavbar from '../components/MyNavbar';

//assets

import '../assets/simple-line-icons/css/simple-line-icons.css';
import '../assets/device-mockups/device-mockups.css';
import screenshot_1 from '../assets/img/screenshot_1.png';
import screenshot_2 from '../assets/img/screenshot_2.png';


const iphone6 = require("../assets/device-mockups/iphone_6/iphone_6_port_black.png");

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: ''
        }
    }

    isNumberKey(evt) {
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var lastChar = evt.target.value[evt.target.value.length - 1];
        if (lastChar in numbers || lastChar == null && this.state.phoneNumber.length < 11) {
            this.setState({ phoneNumber: evt.target.value });
        }
    }



    render() {
        return (
            <div>
            <MyNavbar />

            <header class="masthead chalkboard">
              <div class="container h-100">
                <div class="row h-100">
                  <div class="col-lg-7 my-auto">
                    <div class="header-content mx-auto">
                      <h1 class="mb-5">Share Your Pain</h1>
                      <p>A safe space to overcome emotional pain. Share your unfiltered feelings or thoughts anonymously, without fear of judgement or shaming.</p>
                        <Link to='/share' class="nav-link js-scroll-trigger">
                            <div class="btn btn-xl col-12 col-md-6" style={styles.tryButton} id='tryButton'><span class='lightText'>Start Now</span></div>
                        </Link>
                        <div class="badges" style={{marginTop:30}}>
                          <a class="badge-link" href="#" onClick={() => alert('This app is currently being submitted, please check back soon!')}><img src={require("../assets/img/google-play-badge.svg")} alt=""/></a>
                          <a class="badge-link" href="#" onClick={() => alert('This app is currently being submitted, please check back soon!')}><img src={require("../assets/img/app-store-badge.svg")} alt=""/></a>
                        </div>
                      
                    </div>
                  </div>
                  <div class="col-lg-5 my-auto" style={{backgroundColor: 'transparent', justifyContent: 'center'}}>
                    {/* <div class="device-container"> */}
                            <img src={screenshot_1} style={isMobile ? {width: '100%'} : {maxHeight: 500}} class='mx-auto' alt=""/>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </header>

            {/* <section class="download bg-primary text-center" id="download">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 mx-auto">
                    <h2 class="section-heading">Discover what all the buzz is about!</h2>
                    <p>Our app is available on any mobile device! Download now to get started!</p>
                    <div class="badges">
                      <a class="badge-link" href="#"><img src="img/google-play-badge.svg" alt=""></a>
                      <a class="badge-link" href="#"><img src="img/app-store-badge.svg" alt=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            {/* <section class="features" id="features">
              <div class="container">
                <div class="section-heading text-center">
                  <h2>Unlimited Features, Unlimited Fun</h2>
                  <p class="text-muted">Check out what you can do with this app theme!</p>
                  <hr/>
                </div>
                <div class="row">
                  <div class="col-lg-4 my-auto">
                    <div class="device-container">
                      <div class="device-mockup iphone6_plus portrait white">
                        <div class="device">
                          <div class="screen">
                            <img src="img/demo-screen-1.jpg" class="img-fluid" alt="" />
                          </div>
                          <div class="button">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8 my-auto">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="feature-item">
                            <i class="icon-screen-smartphone text-primary"></i>
                            <h3>Device Mockups</h3>
                            <p class="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="feature-item">
                            <i class="icon-camera text-primary"></i>
                            <h3>Flexible Use</h3>
                            <p class="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="feature-item">
                            <i class="icon-present text-primary"></i>
                            <h3>Free to Use</h3>
                            <p class="text-muted">As always, this theme is free to download and use for any purpose!</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="feature-item">
                            <i class="icon-lock text-primary"></i>
                            <h3>Open Source</h3>
                            <p class="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="cta">
              <div class="cta-content">
                <div class="container">
                  <h2>Stop waiting.<br/>Start building.</h2>
                  <a href="/share" class="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
                </div>
              </div>
              <div class="overlay"></div>
            </section> */}

            {/*<section class="contact bg-primary" id="contact">
              <div class="container">
                <h2>We
                  <i class="fa fa-heart"></i>
                  new friends!</h2>
                <ul class="list-inline list-social">
                  <li class="list-inline-item social-twitter">
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item social-facebook">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item social-google-plus">
                    <a href="#">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </section> */}

            <footer>
              <div class="container">
                <p>&copy; ShareYourPain 2018. All Rights Reserved.</p>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#">Privacy</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">Terms</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </footer>

            </div>

        );
    }
}

const styles = {
    mockup1: {
        maxWidth: '75%'
    },
    mockup2: {
        maxWidth: '100%',
    },
    tryButton: {
        // backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: "#f7f7f7",
        height:40,
        borderRadius: 20
    }
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser
})

export default connect(mapStateToProps)(Homepage);

// export default Homepage