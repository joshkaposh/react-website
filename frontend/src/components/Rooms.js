import React, { Component } from 'react';
import { gql } from "apollo-boost";
import { graphql } from 'react-apollo'
// Packages needed to send Query to GraphQL



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
                        <div className='room-title'><p>{room.title}</p></div>
                        <div className='room-desc'><p>{room.description}</p></div>
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