import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch'

export default function Header(props) {
    return (
        <header className="card-header bg-dark text-white">
            <div className="row align-items-center">
                <Stats todos={props.todos} />
                <Stopwatch />
                <h1 className="col mb-0 text-right">{props.title}</h1>
            </div>
        </header>
    );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
    todos: React.PropTypes.array.isRequired
};