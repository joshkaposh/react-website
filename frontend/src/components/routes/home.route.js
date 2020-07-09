import React, { Component } from 'react';
import Navbar from '../navbar.component'


import Footer from '../Footer';
import Login from '../login.component'
import { Link } from 'react-router-dom';


class Home extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div id="main">
                    <Login />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
export default Home;