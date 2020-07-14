import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const ADD_ROOM = gql`
  mutation($title: String!, $description: String!, $group: String!, $owner: String!) {
    addRoom(title: $title description: $description group: $group owner: $owner) {
      title
      description
      group
      owner
    }
  }
`;

export default function AddRoom() {

    const [addRoom, { data }] = useMutation(ADD_ROOM);
    const [state, setState] = useState({
        title: '',
        description: '',
        group: '',
        owner: ''
      })


    function handleChange(e) {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        addRoom({ variables: {
            title: state.title,
            description: state.description,
            group: state.group,
            owner: state.owner}});
    }

    return (
        <form onSubmit={handleSubmit} className="room-section" style={{backgroundColor: 'rgb(245, 245, 245)', width: '50%'}} >
            <div className="room-content room-title">
                <label style={{marginRight: '10px'}}>Title:</label>
                <input
                    style={{padding: '3px 5px'}}
                    type="text"
                    name="title"
                    value={state.title}
                    onChange={handleChange}
                />
            </div>
            <div className="room-content room-description">
                <label style={{marginRight: '10px'}}>Description:</label>
                <input
                    style={{padding: '3px 5px'}}
                    type="text"
                    name="description"
                    value={state.description}
                    onChange={handleChange}
                />
            </div>
            <div className="room-content room-group">
                <label style={{marginRight: '10px'}}>Group:</label>
                <input
                    style={{padding: '3px 5px'}}
                    type="text"
                    name="group"
                    value={state.group}
                    onChange={handleChange}
                />
            </div>
            <div className="room-content room-owner">
                <label style={{marginRight: '10px'}}>Owner:</label>
                <input
                    style={{padding: '3px 5px'}}
                    type="text"
                    name="owner"
                    value={state.owner}
                    onChange={handleChange}                />
            </div>
            <div className="room-content room-connect">
                <input
                    type="submit" value="Create Room"/>
            </div>
        </form>
    )
}