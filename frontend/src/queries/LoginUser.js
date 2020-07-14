import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const LOGIN_USER = gql`
  query($name: String!, $password: String!) {
    user(name: $name password: $password) {
        id
        name
        role
    }
  }
`

export default function LoginUser() {
    const [state, setState] = useState({
        username: '',
        password: '',
      })
      const [user, { loading, data }] = useLazyQuery(LOGIN_USER, {
        variables: { name: state.username, password: state.password },
      });


    function handleClick(e) {
        e.preventDefault();
        if(loading) return 'Loading';
        user({ variables: {
            name: state.username,
            password: state.password}});
        console.log(user);
    }
    
    function handleChange(e) {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        });
    }


      return (
        <form>
            <div className="form-group">
                <label htmlFor='username'>Username:</label>
                <input type="text" name="username" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor='password'>Password:</label>
                <input type="password" name="password" onChange={handleChange} />
            </div>
            <div className="submit-form">
                <input  onClick={handleClick} type="submit" value="Login"/>
            </div>
        </form>
    )
    
}
