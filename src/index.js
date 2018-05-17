import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Picbox from './Picbox';
import Navbar from './Navbar';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Navbar/>, document.getElementById('root'));

ReactDOM.render(<Picbox/>, document.getElementById('root'));
//ReactDOM.render(<Picbox/>, document.getElementById('root'));
//ReactDOM.render(<Picbox/>, document.getElementById('root'));



