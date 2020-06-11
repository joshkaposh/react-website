import React from 'react';
import Rooms from './components/Rooms'
import Header from './components/Header'
import Banner from './components/Banner';
import Team from './components/Team'
import Footer from './components/Footer';
class App extends React.Component {
    state = {

    }
    render() {

        return (
            <div className="App">
                <Header />
                <hr />
                <Banner />
                <hr />
                <Rooms />
                <hr />
                <Team />
                <Footer />
          </div>
        );
    }
}
 
export default App;