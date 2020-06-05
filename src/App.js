import React, { Component } from 'react';
import './App.css';
import Rooms from './components/Rooms'
import Header from './components/Header'
import Footer from './components/Footer'
class App extends Component {
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
