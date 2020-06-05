import React, { Component } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTv } from "@fortawesome/free-solid-svg-icons";
import Room from "./Room"
class Rooms extends Component {

    constructor(props) {
        super(props)
        this.state = {
            roomNum: [1, 2, 3, 4, 5, 6],
            titles: [
                "Family", "Online School", "Friends",
                 "Highschool Reunion", "incoming Call", "Prayer Group"
                ],
            descs: [
                "Daily Call", "AGR 801", "Group Chat",
                "See Your Old Friends!", "Fred Fernandez", "Weekly Call"
                ],
        
        }
    }

    render() {
        return ( 
            <section className="page-section bg-light" id="rooms">
                <div className="container">
                    <div className="row">
                        {
                            <React.Fragment>
                            <Room 
                                id={this.state.roomNum[0]}
                                title={this.state.titles[0]}
                                desc={this.state.descs[0]}
                                >
                            </Room>
                            <Room 
                                id={this.state.roomNum[1]} 
                                title={this.state.titles[1]}
                                desc={this.state.descs[1]}
                                >
                            </Room>
                            <Room 
                                id={this.state.roomNum[2]}
                                title={this.state.titles[2]}
                                desc={this.state.descs[2]}
                                >
                            </Room>
                            <Room 
                                id={this.state.roomNum[3]}
                                title={this.state.titles[3]}
                                desc={this.state.descs[3]}
                                > 
                            </Room>
                            <Room 
                                id={this.state.roomNum[4]} 
                                title={this.state.titles[4]}
                                desc={this.state.descs[4]}
                                >
                            </Room>
                            <Room 
                                id={this.state.roomNum[5]} 
                                title={this.state.titles[5]}
                                desc={this.state.descs[5]}
                                >
                            </Room>
                            </React.Fragment>
                        }
                    </div>
                </div>
            </section> 
        );
    }
}
 
export default Rooms;

