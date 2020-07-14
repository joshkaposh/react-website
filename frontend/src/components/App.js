import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Switch, Route } from 'react-router-dom';
import client from '../ApolloClient';
// Routes
import GetStarted from '../routes/get-started.route';
// import Login from '../routes/login.route';
import Groups from '../routes/Rooms.route';
import AddRoomPage from '../routes/add-room.route';
import EditRoomPage from '../routes/edit-room.route';





class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    isLoggedIn: false,
  }
}
    render() {

        return (
          <ApolloProvider client={client}>
            <div className="App">
              <Switch>
                <Route path="/" component={GetStarted} exact />
                {/* <Route path="/login" component={Login} /> */}
                <Route path="/rooms" component={Groups} />
                <Route path="/edit-room" component={EditRoomPage} />
                <Route path="/add-room" component={AddRoomPage} />


              </Switch>
            </div>
          </ApolloProvider>
        );
    }
}
 
export default App;