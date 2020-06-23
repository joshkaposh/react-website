import React, { Component } from 'react';
import Navbar from '../navbar.component'
import Banner from '../Banner'
import Footer from '../Footer'

class Home extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div id="content">
                    <Banner />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
export default Home;