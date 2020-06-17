import React, { Component } from 'react';

class Team extends Component {
    state = {  }
    render() { 
        return (
            <div id="main">
                <form id="contact-form">
                    <label id="contact-label">Want to contact the team?</label>
                    <div className="form-field">
                        <label id="reasons">Reason:</label>
                        <select id="select-reason"name="reasons">
                            <option value="bug">subscription</option>
                            <option value="connection">purchase conference room</option>
                            <option value="sales">sales & marketing</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div id="message">
                        <textarea placeholder="message"/>
                    </div>
                    <div>
                        <button id="submit">submit</button>
                    </div>

                </form>
            </div>
        );
    }
}
 
export default Team;

// {/* <section className="team-member">
// <h3>Name</h3>
// <p>Name.Contact</p>
// <p>Name.Desc</p>
// </section>
// <section className="team-member">
// <h3>Name</h3>
// <p>Name.Contact</p>
// <p>Name.Desc</p>
// </section>
// <section className="team-member">
// <h3 className="member-title">Name</h3>
// <p className="member-contact">Name.Contact</p>
// <p className="member-desc">Name.Desc</p>
// </section> */}

// Reason for Contacting Us