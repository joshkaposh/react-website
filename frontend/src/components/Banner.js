import React, { Component } from 'react';

class Banner extends Component {
    render() { 
        return (
            <div id="banner">
                <div className="banner-title">
                    <p>This is <strong>enCourage Family</strong>, a platform that enforces safe and secure communication for families going through separation and divorce.</p>
                </div>
                <div className="banner-btn">
                    <a href='#read-more'>Read More</a>
                </div>
            </div>
        );
    }
}
 
export default Banner;