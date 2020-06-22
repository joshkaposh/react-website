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
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentDidUpdate() {
        console.log(this.props);
    }

    displayRooms() {
        var data = this.props.data;
        if(data.loading) {
            return <div>Loading rooms...</div>
        }
        else {
            return data.rooms.map(room => {
                return (
                    <div
                        key={room.id}
                        id={room.id}
                        className='room-item'
                    >
                        <div className='room-title'><a className={room.title}>{room.title}</a></div>
                        <div className='room-desc'><a className={room.description}>{room.description}</a></div>
                    </div>
                )
            })
        }
    }


    render() {

        return ( 
            <div id="rooms">
                { this.displayRooms() }
            </div> 
        );
    }
}

export default graphql(getRoomsQuery)(Rooms);

// db.rooms.insertMany([
//     {title: "Family", description: "Daily Call"},
//     {title: "Online School", description: "AGR 801"},
//     {title: "Highschool Reunion", description: "See Your Old Friends!"},
//     {title: "Friends", description: "Group Chat"},
//     {title: "Incoming Call", description: "Fred Fernandez"},
//     {title: "Prayer Group", description: "Weekly Call"}
// ])
    