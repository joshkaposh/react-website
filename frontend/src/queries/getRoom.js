import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_ROOM_BY_ID = gql`
  query($id: ID!) {
    room(id: $id) {
      title
      description
      group
      owner
    }
  }
`

function GetRoom(id) {
    const { roomID } = id;

    const { loading, error, data } = useQuery(GET_ROOM_BY_ID, {
        variables: { id: roomID },
    });
        if (loading) return <p>Loading ...</p>;
        if(error) return <p>Error</p>
        
      return (
          <div className='room-section' style={{backgroundColor: 'rgb(200, 200, 200)', width: '45%', borderRadius: '6px'}}>
            <div className='room-content'>
              <label style={{marginRight: '5px'}}>Title:</label>
              <span>{data.room.title}</span>
            </div>
            <div className='room-content'>
                <label style={{marginRight: '7px'}}>Description:</label>
                <span>{data.room.description}</span>
            </div>
            <div className='room-content'>
                <label style={{marginRight: '7px'}}>Group:</label>
                <span>{data.room.group}</span>
            </div>
            <div className='room-content'>
                <label style={{marginRight: '7px'}}>Owner:</label>
                <span>{data.room.owner}</span>
            </div>
          </div>
      )
    
}

export default GetRoom;