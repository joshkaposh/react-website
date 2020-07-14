import React from 'react';
import Navbar from '../components/Navbar.component';
import LoginUser from '../queries/LoginUser';

export default function Login() {

    return (
        <React.Fragment>
            <Navbar />
            <div id="content" className="login">
                <LoginUser />
            </div>
        </React.Fragment>
    );

}