import React, { Component } from 'react';
import Room from "./Room"
class Rooms extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numOfRooms: [
                1, 2, 3,
                4, 5, 6,
            ],
            roomTitles: [
                "Family", "Online School", "Friends",
                 "Highschool Reunion", "incoming Call", "Prayer Group"
                ],
            roomDescs: [
                "Daily Call", "AGR 801", "Group Chat",
                "See Your Old Friends!", "Fred Fernandez", "Weekly Call"
                ],
        
        }
    }


    render() {

        const {numOfRooms, roomTitles, roomDescs} = this.state;
        const rooms = numOfRooms;


            rooms.slice(rooms.length)
            roomTitles.slice(roomTitles.length)
            roomDescs.slice(roomDescs.length)

            const displayedRooms = rooms.map((room) =>
            
                <Room 
                    id={room}
                    key={room}
                    title={roomTitles.shift()}
                    desc={roomDescs.shift()}
                    >
                </Room>
            
            )

        return ( 
            <section className="page-section bg-light" id="rooms">
                <div className="container">
                    <div className="row">
                        {displayedRooms}
                    </div>
                </div>
            </section> 
        );
    }
}
 
export default Rooms;