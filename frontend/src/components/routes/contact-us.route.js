import React, { Component } from 'react';
import Navbar from '../navbar.component';
import Team from '../Team';
import Footer from '../Footer'


class ContactUs extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <Navbar />
            <Team />
            <Footer />
        </React.Fragment>
        );
    }
}
export default ContactUs;