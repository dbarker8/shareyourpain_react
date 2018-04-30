import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Navbar, NavItem, Nav, Modal, Button, DropdownMenu, DropdownItem } from "reactstrap";
// import LoginModal from './modals/LoginModal';
// import { connect } from 'react-redux';
// import { updateLoggedInUser } from "../redux/actions/loggedInUserAction";
import logo from '../assets/img/logo-header.png';

class MyNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // this.checkIfLoggedIn();
    }

    handleMenuPress(){
        //dont delete this empty function
    }


    render() {

        // let login = this.props.loggedInUser != null ?
        //     <DropdownMenu eventKey="4" title={"Welcome, " + this.props.loggedInUser.name} id="nav-dropdown">
        //         <DropdownItem eventKey="4.1">My Info</DropdownItem>
        //         <DropdownItem eventKey="4.2" onClick={this.logoutUser.bind(this)}>Logout</DropdownItem>
        //     </DropdownMenu>
        //     :
        //     <Link to="/login" class='nav-link'>Log In</Link>;



        return (

            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" >
              <div class="container">
                {/* <a class="navbar-brand js-scroll-trigger" href="#page-top">SYP</a> */}
                <img class='brand-img' src={logo} style={{ height: 45, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={this.handleMenuPress.bind(this)}>
                  <i class="icon-menu"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link to='/' class="nav-link js-scroll-trigger">Home</Link>
                    </li>
                    <li class="nav-item">
                        {/* {login} */}
                        <Link to='/share' class="nav-link js-scroll-trigger">Share</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/stories' class="nav-link js-scroll-trigger">Wall</Link>
                    </li>
                    <li class="nav-item">
                                <Link to='/gethelp' class="nav-link js-scroll-trigger" style={{ color: '#4286f4', fontWeight: 'bold'}}>Get Help</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>


        );
    }
}

const styles = {
    navbar: {
        marginBottom: 0
    }
}

// const mapStateToProps = state => ({
//     loggedInUser: state.loggedInUser
// })

// const mapActionsToProps = {
//     onUpdateLoggedInUser: updateLoggedInUser //to prevent variable collisions with naming, use on
// }

// export default connect(mapStateToProps, mapActionsToProps)(MyNavbar);

export default MyNavbar;