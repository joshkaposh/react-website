import React, { Component } from 'react'; 
import Navbar from '../navbar.component';
import Footer from '../Footer'
import Banner from '../Banner';




class getStarted extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <section>
                    <Banner />
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}
export default getStarted;