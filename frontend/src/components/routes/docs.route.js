import React, { Component } from 'react';
import Navbar from '../navbar.component'
import Footer from '../Footer'
class Docs extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div id="content">
                    <h2 className="doc-title">Documentation</h2>
                    <h4>Versions</h4>
                    <ul className="doc-list">
                        <li className="doc-list-item"><a href="#">Version 1</a></li>
                        <li className="doc-list-item"><a href="#">Version 2</a></li>
                        <li className="doc-list-item"><a href="#">Version 3</a></li>
                    </ul>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
export default Docs;