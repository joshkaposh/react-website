import React, { Component } from 'react'; 
import Navbar from '../navbar.component';
import Banner from '../Banner';
import Rooms from '../Rooms';
import Team from '../Team';
import Footer from '../Footer'

class getStarted extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div id="content">
                    <Banner />
                    <Rooms />
                    <Team />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}
export default getStarted;