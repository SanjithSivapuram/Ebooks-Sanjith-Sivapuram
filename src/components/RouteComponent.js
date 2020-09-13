import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './MainComponent';

class Route extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Main user={this.props.user} />
                </div>
            </BrowserRouter>
        )
    }
}

export default Route;