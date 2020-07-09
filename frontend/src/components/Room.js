import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import RoomControls from './room-controls/RoomControls';
// import RoomEdit, RoomConnect from 'admin room controls'

// Packages needed to send Query to GraphQL

const GET_ROOMS_QUERY = gql`
{
  rooms{
    title
    description
    owner
    group
  }
}
`;

const Room = (user) => {
    
    const { loading, error, data } = useQuery(GET_ROOMS_QUERY);
    if(loading) return 'Loading...';
    if(error) return `Error! ${error.message}`;

    // const connection_url = ``
    const titleToUrl = (title) => {
        title = title.replace(/\s/g,'');
        console.log(title);
        // Removes whitespace;
    }


    
    if(user.role === 'admin') {
        console.log('admin');

        return (
            data.rooms.map(room => {
                return <section className='room' key={room.id}>
                <div className='room-section'>

                <div className='room-content room-title'>
                    <label>Title:</label>
                    <span>{room.title}</span>
                </div>
                <div className='room-content room-description'>
                    <label>Description:</label>
                    <span>{room.description}</span>
                </div>
                <div className='room-content room-group'>
                    <label>Group:</label>
                    <span>{room.group}</span>
                </div>
                <div className='room-content room-owner'>
                    <label>Owner:</label>
                    <span>{room.owner}</span>
                </div>
                <RoomControls room={room} />
            </div>
        </section>
            })
        )
    }
    else if(user.role === 'basic') {

        const user_rooms = data.rooms.filter(room => {
            return room.group === user.group;
        })
        console.log(`User Role: ${user.role}`);
        console.log('User Rooms');
        console.log(user_rooms);

        return (
            user_rooms.map(room => {
                return <section className='room' key={room.id}>
                <div className='room-content room-title'>
                    <label>Title:</label>
                    <span>{room.title}</span>
                </div>

                <div className='room-content room-description'>
                    <label>Description:</label>
                    <span>{room.description}</span>
                </div>
                <div className='room-content room-group'>
                    <label>Group:</label>
                    <span>{room.group}</span>
                </div>
                <div className='room-connect'>
                    <a href="#">Connect</a>
                </div>
        </section>
            })
        )
    }
        
    return (
        <div>Room</div>
    )
}
 
export default (Room);