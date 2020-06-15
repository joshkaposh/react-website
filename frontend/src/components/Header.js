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

// function DropdownMenu() {

//     function DropdownItem(props) {
//       return (
//         <a href="#" className="menu-item">
//           <span className="icon-button icon-left">{props.leftIcon}</span>
  
//           {props.children}
  
//           <span className="icon-button icon-right">{props.rightIcon}</span>
//         </a>
//       )
//     }
  
//     return (
//       <div className="dropdown">
//         <DropdownItem
//           leftIcon="O"
//           rightIcon="X"
//           > link1
//         </DropdownItem>
//         <DropdownItem
//           leftIcon="O"
//           rightIcon="X"
//           > link2
//         </DropdownItem>
//         <DropdownItem
//           leftIcon="O"
//           rightIcon="X"
//           > link3
//         </DropdownItem>
//       </div>
//     )
//   }
  
//   function Navbar(props) {
//     return (
//       <nav className={props.className}>
//             <ul className="navbar">
//                 <li className="logo"><h1><a href="index.html">enCourage Family</a></h1></li>
//                 { props.children }
//           </ul>
//       </nav>
//     )
//   }
  
//   function NavItem(props) {
  
//     const [open, setOpen] = useState(false);
  
//     return (
//       <li className="nav-item">
//         <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
//           {props.icon}
//         </a>
  
//         {open && props.children}
//       </li>
//     );
//   }
 
// export default Header;