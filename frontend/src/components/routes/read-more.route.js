import React, { Component } from 'react';
import Navbar from '../navbar.component'

class Readmore extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div id="content">
                    Hi
                </div>
            </React.Fragment>
        );
    }
}
export default Readmore;