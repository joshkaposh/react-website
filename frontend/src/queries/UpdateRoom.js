import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const UPDATE_ROOM = gql`
  mutation($id: ID!, $title: String!, $description: String!, $group: String!, $owner: String!) {
    updateRoom(id: $id title: $title description: $description group: $group owner: $owner) {
      id
      title
      description
      group
      owner
    }
  }
`;

function UpdateRoom(id) {
    const { roomID } = id;
    const [updateRoom, { data }] = useMutation(UPDATE_ROOM);

    const [state, setState] = useState({
        title: '',
        description: '',
        group: '',
        owner: ''
      })

    const refreshPage = () => {
        window.location.reload(false)
    }

    function handleSubmit(e) {
        e.preventDefault();
        updateRoom({ variables: {
            id: roomID,
            title: state.title,
            description: state.description,
            group: state.group,
            owner: state.owner}});
            refreshPage()
    }

    function handleChange(e) {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        });
    }
  
    
      return (
        <form onSubmit={handleSubmit}
        >
            <div className="room-content room-title">
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={state.title}
                    onChange={handleChange}
                />
            </div>
            <div className="room-content room-description">
                <label>Description:</label>
                <input
                    type="text"
                    name="description"
                    value={state.description}
                    onChange={handleChange}
                />
            </div>
            <div className="room-content room-group">
                <label>Group:</label>
                <input
                    type="text"
                    name="group"
                    value={state.group}
                    onChange={handleChange}
                />
            </div>
            <div className="room-content room-owner" style={{marginBottom: 0}}>
                <label>Owner:</label>
                <input
                    type="text"
                    name="owner"
                    value={state.owner}
                    onChange={handleChange}                />
            </div>
            <div className="room-content">
                <input type="submit" value="Save"/>
            </div>
        </form>

    )
    
}


export default UpdateRoom;
