import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";

class Room extends Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
            <div className="room-item">
                <div className="room-icon">

                </div>
                <a className="tvIcon" href="https://encouragefamily.com/" target="_blank" rel="noopener noreferrer">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><FontAwesomeIcon icon={faTv} size="4x" /></div>
                    </div>
                </a>
                <div className="room-title">
                    <div className="portfolio-caption-heading">{this.props.title}</div>
                </div>
                <div className="room-desc">
                    <div className="portfolio-caption-subheading text-muted">{this.props.desc}</div>
                </div>
            </div>
        </div>
            
        );
    }
}
 
export default Room;