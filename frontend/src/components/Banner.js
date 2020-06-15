import React, { Component } from 'react';
import { BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import ReadMore from './routes/read-more.route'

class Banner extends Component {
    render() { 
        return (
            <div id="banner">
                <div className="banner-title">
                    <p>This is <strong>enCourage Family</strong>, a platform that enforces safe and secure communication for families going through separation and divorce.</p>
                </div>
                <div className="banner-btn">
                    <Link to="/read-more" component={ReadMore} />
                </div>
    
                <div id="read-more"></div>
            </div>
        );
    }
}
 
export default Banner;