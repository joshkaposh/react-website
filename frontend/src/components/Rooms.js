import React, { Component } from 'react';
import { gql } from "apollo-boost";
import { graphql } from 'react-apollo'
// Packages needed to send Query to GraphQL

import Room from "./Room"


const getRoomsQuery = gql`
{
    rooms {
        id
        title
        description
    }
}
`


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
                 "Highschool Reunion", "Incoming Call", "Prayer Group"
                ],
            roomDescs: [
                "Daily Call", "AGR 801", "Group Chat",
                "See Your Old Friends!", "Fred Fernandez", "Weekly Call"
                ],
        
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentDidUpdate() {
        console.log(this.props);
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
            <div id="rooms">
                {displayedRooms}
            </div> 
        );
    }
}

export default graphql(getRoomsQuery)(Rooms);