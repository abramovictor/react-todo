import React, { Component } from 'react';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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

    handleDelete = id => {
        let todos = this.state.todos.filter((todo, index) => index !== id);
        this.setState({ todos });
    };

    handleAdd = title => {
        let todo = {
            title,
            completed: false
        };

        let todos = [...this.state.todos, todo];
        this.setState({ todos });
    };

    handleEdit = (id, title) => {
        let todos = this.state.todos.map((todo, index) => {
            if (index === id) {
                todo.title = title;
            }

            return todo;
        });

        this.setState({ todos });
    };

    render() {
        return (
            <div className="todo-app card shadow">

                <Header title={this.props.title} todos={this.state.todos} />

                <CSSTransitionGroup
                    component="section"
                    className="card-body"
                    transitionName="slide"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                    transitionAppear={true}
                    transitionAppearTimeout={700}
                >
                    {this.state.todos.map(({ title, completed }, index) =>
                        <Todo
                            onStatusChange={this.handleStatusChange}
                            title={title}
                            completed={completed}
                            key={index}
                            id={index}
                            onDelete={this.handleDelete}
                            onEdit={this.handleEdit}
                        />
                    )}
                </CSSTransitionGroup>

                <footer className="card-body bg-dark">
                    <Form onAdd={this.handleAdd} />
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
