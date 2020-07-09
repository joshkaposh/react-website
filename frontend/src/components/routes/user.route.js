import React, { Component } from 'react';
import Navbar from '../navbar.component'
import User from '../User.component'


class Home extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div id="content">
                    <User />
                </div>
            </React.Fragment>
        );
    }
}
export default Home;