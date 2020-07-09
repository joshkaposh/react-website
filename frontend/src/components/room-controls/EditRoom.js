import React, { Component } from 'react';
import Navbar from '../navbar.component';

class EditRoom extends Component {
    state = {  }
    displayRoom = () => {
        const room = this.props.location.roomProps;
        console.log(room);
        // return 
    }

    render() {


        return (
            <React.Fragment>
                <Navbar />
                <div id="content">
                    <div className="edit-room">
                        {this.displayRoom()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default EditRoom;