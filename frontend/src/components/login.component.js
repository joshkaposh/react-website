import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { gql } from "apollo-boost";
import { graphql } from 'react-apollo';

const getUsersQuery = gql`
{
  users {
      id
    name
    password
    group
    role
  }
}
`

class Submit extends Component {
    constructor(props) {
        super(props);

        this.state ={
            id: this.props.id,
            key: this.props.key,
            name: this.props.name,
            password: this.props.password,
            group: this.props.group,
            role: this.props.role,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault()
    }


    render(){
        return(
            <button id="submit"
            >
                Login
            </button>
        )
    }
}


// Submit button above

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: '',
                name: '',
                password: '',
                group: '',
                role: '',
            }
        }
        this.displayUsers = this.displayUsers.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    changeUser = (name) => {
        this.props.data.users.filter((user) => {
            if(user.name === name) {
                console.log(user);
                this.state.user = {
                id: user.id,
                name: user.name,
                password: user.password,
                group: user.grpup,
                role: user.role,
            }
            console.log(this.state.user);
            }
        })
    }

    handleChange = event => {
        event.preventDefault()
        this.changeUser(event.target.value)
    }

    displayUsers = () => {
        var data = this.props.data;
        if(data.loading) {
            return <option>Loading users...</option>
        }
        else {
            // console.log(data);
            
            return data.users.map(user => {
                let {id, name, password, role, group} = user;
                return (
                    <React.Fragment>
                        <option
                            id={id}
                            key={id}
                            name={name}
                            password={password}
                            role={role}
                            group={group}
                            className='user'
                        > {name}
                        </option>
                    </React.Fragment>
                )
            })
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state.user);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="login">
                <div className="login-users">
                <select value={this.state.user.name} onChange={this.handleChange} >
                    {this.displayUsers()}
                </select>
                </div>
                <div className="login-submit">
                    <input type="submit" value="Login" />
                </div>
            </form>
        );
    }
}
export default graphql(getUsersQuery)(Login);