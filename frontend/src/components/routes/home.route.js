import React, { Component } from 'react';
import Navbar from '../navbar.component'
import Rooms from '../Rooms'


class Home extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div id="content">
                    <Rooms />
                </div>
            </React.Fragment>
        );
    }
}
export default Home;