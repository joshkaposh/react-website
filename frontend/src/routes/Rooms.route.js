import React, { Component } from 'react';
import Navbar from '../components/Navbar.component';
import Room from '../components/Room.component';
import { gql } from "apollo-boost";
import { graphql } from 'react-apollo';
// Packages needed to send Query to GraphQL

const GET_USERS_QUERY = gql`
{
  users{
    id
    name
    password
    group
    role

  }
}
`

class Groups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user: {}
        }
        this.displayUsers = this.displayUsers.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    changeUser(e) {
        this.setState({username: e.target.value})
        const newUser = this.props.data.users.filter(user => {
            return user.name === e.target.value;
        })
        this.setState({user: newUser[0]})
    }

    displayUsers() {
        var data = this.props.data;
        if(data.loading) {
            return <option>Loading Users...</option>
        }
        else {
            return (
                    data.users.map(user => {
                        return (
                        <option
                            key={user.id}
                            name={user.name}
                            group={user.group}
                            role={user.role}
                        >
                            {user.name}
                        </option>
                        )
                    })
            )
        }
    }

    displayRooms() {
        const user = this.state.user;

        if(user === undefined) {
            return <div>Please Sign In</div>
        } else
        if(user.role === 'admin') {
             return <div className="admin-view">
                <div>name: {user.name}</div>
                <div>group: {user.group}</div>
                <div>role: {user.role}</div>
                <h2>Rooms</h2>
                <Room role={user.role} group={user.group}/>
         </div>
        } else
        if(user.role === 'basic') {
            return <div className="basic-view">
                <div>name: {user.name}</div>
                <div>group: {user.group}</div>
                <div>role: {user.role}</div>
                <h2>Rooms</h2>
                <Room role={user.role} group={user.group} />
            </div>
        }
    }



    render() {
        const {role} = this.state.user;

        return (
            <React.Fragment>
                <Navbar userRole={role}/>
                <div id="content">
                    <div className="groups">
                        <div className="sign-in">
                            <select onChange={this.changeUser}>
                                {this.displayUsers()}
                            </select>
                        </div>
                        <div className="rooms">
                            {this.displayRooms()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default graphql(GET_USERS_QUERY)(Groups);