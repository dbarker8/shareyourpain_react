import React, { Component } from 'react';

class LoginPage extends Component {


    render() {
        return (
                <div id='bodydiv' class="text-center">
                <div class="form-signin">
                    {/* <img class="mb-4" src={require('../assets/img/png')} alt="" width="72" height="72"/> */}
                    <h1 class="h3 mb-3 font-weight-normal">Sign in using your .edu email and password</h1>
                    <label for="inputEmail" class="sr-only">.edu Email</label>
                    <input type="email" class="form-control" placeholder="email" required autofocus value={this.state.email} onChange={(x) => this.setState({email: x.target.value})}/>
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required value={this.state.password} onChange={(x) => this.setState({password: x.target.value})}/>

                    <button class="btn btn-lg btn-primary btn-block" onClick={this.loginUser.bind(this)}>Sign in</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                </div>
                </div>
        );
    }
}

export default LoginPage;
