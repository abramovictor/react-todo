import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';

export default class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };
    }

    handleButtonEditClick = () => {
        let editing = !this.state.editing;
        this.setState({ editing });
    };

    handleSubmit = event => {
        event.preventDefault();
        let title = this.refs.title.value;

        this.props.onEdit(this.props.id, title);

        this.setState({ editing: false });
    };

    get renderDisplay() {
        return (
            <div className={`card p-2 shadow-sm flex-row align-items-center todo${this.props.completed ? ' completed' : ''}`}>
                <Checkbox
                    onChange={() => this.props.onStatusChange(this.props.id)}
                    checked={this.props.completed}
                />

                <div className="todo-text">{this.props.title}</div>

                <div className="btn-group">
                    <Button
                        className="btn btn-link text-dark"
                        icon="fas fa-edit"
                        title="Редактировать"
                        onClick={this.handleButtonEditClick}
                        disabled={this.props.completed}
                    />
                    <Button
                        className="btn btn-link text-dark"
                        icon="fas fa-trash-alt"
                        title="Удалить"
                        onClick={() => this.props.onDelete(this.props.id)}
                    />
                </div>
            </div>
        );
    }

    get renderForm() {
        return (
            <div className='card p-2 shadow-sm flex-row align-items-center todo'>
                <form className="todo-edit input-group btn-group" onSubmit={this.handleSubmit}>
                    <input
                        ref="title"
                        defaultValue={this.props.title}
                        className="form-control"
                        type="text"
                        placeholder="Заголовок задачи"
                    />
                    <Button
                        type="submit"
                        className="btn btn-dark"
                        icon="fas fa-save"
                        title="Сохранить"
                    />
                </form>
            </div>
        );
    }

    render() {
        return this.state.editing ? this.renderForm : this.renderDisplay;
    }
}

Todo.propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onStatusChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onEdit: React.PropTypes.func.isRequired
};