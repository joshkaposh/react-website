import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            logo: "enCourage Family",
            links: {
                menu: "Menu",
                link1: "Get Started",
                link2: "Docs",
                link3: "Download",
                link4: "Contact Us",
            },
            prevScrollpos: window.pageYOffset,
            visible: true,
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }

      handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };

    render() {

        return (
            <div id="header">
                <div id="logo">
                    <h1><a href="index.html">{this.state.logo}</a></h1>
                </div>
                <nav id="nav" >
                    <ul>
                        <li className="active"><a href="index.html">{this.state.links.link1}</a></li>
                        <li><a href="training.html">{this.state.links.link2}</a></li>
                        <li><a href="resources.html">{this.state.links.link3}</a></li>
                        <li><a href="contact.html">{this.state.links.link4}</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
 
export default Header;