import React, { Component } from 'react'; 
import Navbar from '../navbar.component';
import Footer from '../Footer'
import '../../css/get-started.style.css'

class getStarted extends Component {
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div id="content" className="bg-null">
                    <h2>
                        Get Started with enCourage Family
                    </h2>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
export default getStarted;