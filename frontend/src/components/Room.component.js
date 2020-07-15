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

const randomize = (array) => {
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
}

const convertToUrl = (title, group) => {
    const domain = 'https://encouragefamily.com/';
    title = title.replace(/\s/g,'');
    group = group.replace(/\s/g,'');
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0]
    let input = [];
    let output = [];

    for (let i = 0; i < group.length; i++) {
        const char = group.charAt(i);
        input.push(char);
        const newChar = `${randomize(alphabet)}`;
        output.push(newChar)
      }

    const id = output.join().replace(/,/g, '');
    const url = `${domain}${title}-${id}`
    // const url = `${domain}${title}`
    // url with only room title in url

    return url;
}

const Room = (user) => {

    const { loading, error, data } = useQuery(GET_ROOMS_QUERY);
    if(loading) return 'Loading...';
    if(error) return `Error! ${error.message}`;
    
    if(user.role === 'admin') {
        return (
            data.rooms.map(room => {
            return  <section className='room' key={room.id}>
                <div className='room-section'>
                    <Link className='room-edit' to={{ pathname:'/edit-room', state: {id: room.id}}}>edit</Link>

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
                    <a className='room-connect' href={convertToUrl(room.title, room.group)}>Connect</a>

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
                <div className='room-basic-controls'>
                    <a
                        className='room-connect'
                        style={{borderRadius: '0 0 10px 10px'}}
                        href={convertToUrl(room.title, room.group)}>Connect</a>
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