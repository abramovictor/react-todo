import React from 'react';
import { render } from 'react-dom';

function App() {
    return (
        <h1>React To-Do</h1>
    );
}

render(<App />, document.querySelector('#root'));