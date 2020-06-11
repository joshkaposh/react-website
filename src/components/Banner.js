import React, { Component } from 'react';

/**
 * Represents little about blurb.
 * @state
 * @render
 */
class Banner extends Component {
    state = {
        btn: "Read More"
    }
    render() { 
        return (
            <div id="banner">
                <div className="banner-title">
                    <p>This is <strong>enCourage Family</strong>, a platform that enforces safe and secure communication for families going through separation and divorce.</p>
                </div>
                <div className="banner-btn">
                <a href="index.html">{this.state.btn}</a>
                </div>
            </div>
        );
    }
}
 
export default Banner;