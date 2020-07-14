import React from 'react';
import Navbar from '../components/Navbar.component';

import AddRoom from "../queries/AddRoom";


function AddRoomPage(props) {
    const { role } = props.location.state
    // props = user role
    console.log(role);
    

    return (
        <React.Fragment>
        <Navbar userRole={role} />
        <div id="content">
            <div id="add-room">
                <AddRoom />
            </div>
        </div>
        </React.Fragment>
    )
}

export default AddRoomPage;