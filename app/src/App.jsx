import React from 'react';
import ReactDom from 'react-dom';

function App() {
    return (
        <h1>React To-Do</h1>
    );
}

ReactDOM.render(document.querySelector('#root'), <App />);