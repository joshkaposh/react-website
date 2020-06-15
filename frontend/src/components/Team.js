import React, { Component } from 'react';

class Team extends Component {
    state = {  }
    render() { 
        return (
            <div id="main">
                <section className="team-member">
                    <h3>Damion</h3>
                    <p>Name.Contact</p>
                    <p>Name.Desc</p>
                </section>
                <section className="team-member">
                    <h3>Victoria</h3>
                    <p>Name.Contact</p>
                    <p>Name.Desc</p>
                </section>
                <section className="team-member">
                    <h3 className="member-title">Josh</h3>
                    <p className="member-contact">Name.Contact</p>
                    <p className="member-desc">Name.Desc</p>
                </section>
            </div>
        );
    }
}
 
export default Team;