import './libs/fontawesome/css/all.css';
import './libs/bootstrap/css/bootstrap.css';
import './styles/styles.css';

import React from 'react'
import ReactDOM from 'react-dom';

import App from './App'
import todos from './data/todos.json';


ReactDOM.render(<App initialData={todos} />, document.querySelector('#app'));