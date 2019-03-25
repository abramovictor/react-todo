import React, { Component } from 'react';

import Checkbox from './Checkbox';
import Button from './Button';

export default class Todo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`card p-2 shadow-sm flex-row align-items-center todo${this.props.completed ? ' completed' : ''}`}>
                <Checkbox
                    onChange={() => this.props.onStatusChange(this.props.id)}
                    checked={this.props.completed}
                />

                <div className="todo-text">{this.props.title}</div>

                <div className="todo-buttons">
                    <Button icon="fas fa-edit" title="Редактировать" />
                    <Button
                        icon="fas fa-trash-alt"
                        title="Удалить"
                        onClick={() => this.props.onDelete(this.props.id)}
                    />
                </div>
            </div >
        );
    }
}

Todo.propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onStatusChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
};