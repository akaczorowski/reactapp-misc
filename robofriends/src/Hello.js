import React, { Component } from 'react'; //destructuring
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            // atually this is not HTML, this is JSX which is very similar
            // below we are using tachyons styles
            <div className="tc f1"> 
                <h1>Hello</h1>
                <p>New component.</p>
            </div>
        );
    }
}

export default Hello; // default means export one thing and export allows to use component in other files