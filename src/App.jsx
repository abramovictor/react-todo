import React, { Component } from 'react';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };
    }

    handleStatusChange = (id) => {
        let todos = this.state.todos.map((todo, index) => {
            if (index === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({ todos });
    };

    handleDelete = (id) => {
        let todos = this.state.todos.filter((todo, index) => index !== id);
        this.setState({ todos });
    };

    render() {
        return (
            <div className="todo-app card shadow">

                <Header title={this.props.title} todos={this.state.todos} />

                <section className="card-body">
                    {this.state.todos.map(({ title, completed }, index) =>
                        <Todo
                            onStatusChange={this.handleStatusChange}
                            title={title}
                            completed={completed}
                            key={index}
                            id={index}
                            onDelete={this.handleDelete}
                        />
                    )}
                </section>

                <footer className="card-body bg-dark">
                    <Form />
                </footer>
            </div>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string,
    initialData: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            completed: React.PropTypes.bool
        })
    ).isRequired
};

App.defaultProps = {
    title: 'React Todo'
};
