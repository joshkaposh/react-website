import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Edit = (room) => {
    console.log(room);
    
    return <Link to={{ pathname:'/edit-room', roomProps: room}}>Edit</Link>
}

class RoomControls extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='room-content room-admin-section'>
                <Edit room={this.props.room}/>
            </div>
        )
    }
}

export default RoomControls