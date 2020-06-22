// import React, { Component, useState } from 'react';
// import { BrowserRouter as Router,
//   Route,
//   Switch,
//   Link
// } from 'react-router-dom';



// class Header extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             logo: "enCourage Family",
//             links: {
//                 menu: "Menu",
//                 link1: "Get Started",
//                 link2: "Docs",
//                 link3: "Download",
//                 link4: "Contact Us",
//             },
//         };
//     }


//     render() {

//         return (
//             <div id="header">
//                 <nav className="nav-desktop">
//                     <ul className="navbar">
//                         <li className="logo"><h1><a href="#">{this.state.logo}</a></h1></li>
//                         <li className="navbar-item"><Link to="/get-started">Get Started</Link></li>
//                         <li className="navbar-item"><a href="#">{this.state.links.link2}</a></li>
//                         <li className="navbar-item"><a href="#">{this.state.links.link3}</a></li>
//                         <li className="navbar-item"><a href="#">{this.state.links.link4}</a></li>
//                     </ul>
//                 </nav>
//                 {/* <Navbar className="nav-tablet">
//                     <NavItem >
//                         <DropdownMenu>
//                         </DropdownMenu>
//                     </NavItem>
//                 </Navbar>
//                 <Navbar className="nav-mobile">
//                     <NavItem >
//                         <DropdownMenu >
                            
//                         </DropdownMenu>
//                     </NavItem>
//                 </Navbar> */}
//             </div>
//         );
//     }
// }

// export default Header;