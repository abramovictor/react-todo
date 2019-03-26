import React from 'react';
import Stats from './Stats';

export default function Header(props) {
    return (
        <header className="card-header bg-dark text-white">
            <div className="row align-items-center">
                <Stats todos={props.todos} />
                <h1 className="col mb-0 text-right">{props.title}</h1>
            </div>
        </header>
    );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
    todos: React.PropTypes.array.isRequired
};