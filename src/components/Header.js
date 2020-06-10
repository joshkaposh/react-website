import React, { Component } from 'react';

class Header extends Component {
    state = {
        welcomeMessage: "Welcome to enCourage Family!"
    }
    render() {

        return (
            <header className="page-section bg-light" id="header">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-bold">{this.state.welcomeMessage}</h2>
                        <h4 className="section-subheading text-muted">Who would you like to talk to today?</h4>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default Header;