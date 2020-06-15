
import React, { Component } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTv } from "@fortawesome/free-solid-svg-icons";


class Room extends Component {
    render() {
        return (
            <div className="room-item">
                <div className="room-icon">
                    <a className="tvIcon" href="https://encouragefamily.com/" target="_blank" rel="noopener noreferrer">
                        <div className="room-icon">
                            <div className="room-icon-content">{/* <FontAwesomeIcon icon={faTv} size="5x" /> */}</div>
                        </div>
                    </a>
                </div>

                <div className="room-title">
                    <div className="room-title-heading">Room Name</div>
                </div>
                <div className="room-desc">
                    <div className="room-title-subheading">Room Desc</div>
                </div>
            </div>
        );
    }
}
 
export default Room;

// FontAwesomeIcon goes in the portfolio-hover div
