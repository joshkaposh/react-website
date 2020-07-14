import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
// Packages needed to send Query to GraphQL

import DeleteRoom from '../queries/DeleteRoom';


const GET_ROOMS_QUERY = gql`
{
  rooms{
    id
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
    
    if(user.role === 'admin') {
        return (
            data.rooms.map(room => {
            return  <section className='room' key={room.id}>
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
                <div className='room-admin-controls'>
                    <Link className='room-edit' to={{ pathname:'/edit-room', state: {id: room.id}}}>Edit</Link>
                    <DeleteRoom roomID={room.id}/>
                </div>
            </div>
        </section>
        })
        )
    }
    else if(user.role === 'basic') {

        const user_rooms = data.rooms.filter(room => {
            return room.group === user.group;
        })
        return (
            user_rooms.map(room => {
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
                <div className='room-content room-connect'>
                    <a href='#'>Connect</a>
                </div>
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