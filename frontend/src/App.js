import React from 'react';

import { BrowserRouter as Router,
    Route,
    Switch 
} from 'react-router-dom';

// start of BACKEND

// Routes
import Home from './components/routes/home.route';
import getStarted from './components/routes/get-started.route'
import Docs from './components/routes/docs.route';
import Download from './components/routes/download.route';
import ContactUs from './components/routes/contact-us.route';

// end of BACKEND


class App extends React.Component {
    state = {

    }
    render() {

        return (
            <div className="App">
                <Switch >
                    <Route path="/" component={Home} exact />
                    <Route path="/get-started" component={getStarted} />
                    <Route path="/docs" component={Docs} />
                    <Route path="/download" component={Download} />
                    <Route path="/contact-us" component={ContactUs} />
                    {/* <Route component={<Error />} /> */}
                </Switch>
          </div>
        );
    }
}
 
export default App;

{/* <Header />
<hr />
<Banner />
<hr />
<Rooms />
<hr />
<Team />
<Footer /> */}
