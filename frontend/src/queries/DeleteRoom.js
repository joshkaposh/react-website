import React from 'react';
import { Link } from 'react-router-dom';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const DELETE_ROOM = gql`
  mutation($id: ID!) {
    deleteRoom(id: $id) {
        id
    }
  }
`;

export default function DeleteRoom(props) {
    const { roomID } = props;
    const [deleteRoom, { data }] = useMutation(DELETE_ROOM);

    function handleClick(e) {
        console.log(`room id: ${roomID}`);
        deleteRoom({variables: {id: roomID}});
        window.location.reload(false);
    }

    
    return <Link className='room-delete' to='/rooms' onClick={handleClick} >Delete</Link>
}