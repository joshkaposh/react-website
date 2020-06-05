import React, { Component } from 'react';

class Footer extends Component {
    state = {

    }
    render() { 
        return (
            <footer 
            className="bg-light" id="footer">
                <div className="container">
                    <span className="text-muted">Place Sticky footer content here.</span>
                </div>
            </footer>
        );
    }
}
 
export default Footer;