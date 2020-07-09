import React from 'react';
import {
    Route,
    Switch 
} from 'react-router-dom';
// Routes
import Rooms from './components/Rooms';
import getStarted from './components/routes/get-started.route'
import Docs from './components/routes/docs.route';
import Download from './components/routes/download.route';
import ContactUs from './components/routes/contact-us.route';
import EditRoom from './components/room-controls/EditRoom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});


class App extends React.Component {
    state = {

    }
    render() {

        return (
            <ApolloProvider client={client}>
                <div className="App">
                    <Switch >
                        <Route path="/" component={getStarted} exact />
                        <Route path="/rooms" component={Rooms} />
                        <Route path="/docs" component={Docs} />
                        <Route path="/download" component={Download} />
                        <Route path="/contact-us" component={ContactUs} />
                        <Route path="/edit-room" component={EditRoom} />
                    </Switch>
            </div>
          </ApolloProvider>
        );
    }
}
 
export default App;
