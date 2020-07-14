import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(props) {
    const { userRole } = props;
    console.log(userRole);
        return (
            <header id="header">
                <h2 className="logo"><Link to="/">enCourage Family</Link></h2>
                <nav>
                    <ul className="navbar">
                        {/* {userRole === undefined &&
                        <li className="navbar-item"><Link to={{ pathname:'/login', state: {role: userRole}}}>Login</Link></li>
                        } */}
                        {userRole === 'admin' &&
                        <React.Fragment>
                            <li className="navbar-item"><Link to={{ pathname:'/add-room', state: {role: userRole}}}>Add Room</Link></li>
                        </React.Fragment>
                        }
                        {/*userRole === 'basic' &&
                        <React.Fragment>
                            <li className="navbar-item"><Link to="/rooms">Rooms</Link></li>
                        </React.Fragment>
                        */}
                        {/* I commented out if userRole === undefined, display login link
                         as well as userRole === 'basic' conditional render
                         and commenting out the rooms link in admin,
                         instead in the permanent Navbar (below)
                        */}
                        <li className="navbar-item"><Link to="/rooms">Rooms</Link></li>
                    </ul>
                </nav>
            </header>
        );
}

export default Navbar;