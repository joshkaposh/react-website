import React, { Component } from 'react';

class User extends Component {
    state = {}
    render() { 
        return (
            <span className="section-heading text-bold">{this.props.name}</span>
        );
    }
}
 
export default User;