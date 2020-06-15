import React, { Component } from 'react'; 
import Navbar from '../navbar.component';
import Banner from '../Banner';

class getStarted extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
            </React.Fragment>
        );
    }
}
export default getStarted;