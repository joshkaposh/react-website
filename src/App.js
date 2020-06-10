import React from 'react';
import './App.css';
import Rooms from './components/Rooms'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="App">
                <Header />
                <Rooms />
                <Footer />
          </div>
        );
    }
}
 
export default App;