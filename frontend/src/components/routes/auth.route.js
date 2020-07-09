import React, { Component } from 'react';
import Navbar from '../navbar.component'
import Login from '../login.component'


class Auth extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div id="content">
                    <Login />
                </div>
            </React.Fragment>
        );
    }
}
export default Auth;