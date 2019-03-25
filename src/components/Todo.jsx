import React from 'react';

import Checkbox from './Checkbox';
import Button from './Button';

export default function Todo(props) {
    return (
        <div className={`card p-2 shadow-sm flex-row align-items-center todo${props.completed ? ' completed' : ''}`}>
            <Checkbox checked={props.completed} />

            <div className="todo-text">{props.title}</div>

            <div className="todo-buttons">
                <Button icon="fas fa-edit" title="Редактировать" />
                <Button icon="fas fa-trash-alt" title="Удалить" />
            </div>
        </div>
    );
}

Todo.propTypes = {
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
};