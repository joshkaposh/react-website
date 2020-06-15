import React, { Component } from 'react';
import { BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

class ReadMore extends Component {
    state = {  }
    render() { 
        return (
            <a href="#read-more">Read More</a>
        );
    }
}
 
export default ReadMore;