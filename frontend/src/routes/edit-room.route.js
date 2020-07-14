import React from 'react';
import Navbar from '../components/Navbar.component';

import GetRoom from '../queries/getRoom';
import UpdateRoom from '../queries/UpdateRoom';

function EditRoomPage(props) {
    const id = props.location.state.id;

    console.log(props);


    console.log(id);

    return (
        <React.Fragment>
        <Navbar />
        <div id="content">
            <div id="edit-room">
                <h1>Edit Room Page</h1>
            <div>
                <GetRoom  roomID={id} />
                <hr/>
                <UpdateRoom roomID={id} />
            </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default EditRoomPage;