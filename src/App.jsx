import React, { Component } from 'react';

import Header from './components/Header';
import Todo from './components/Todo';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };
    }

    handleStatusChange = () => {

    };

    render() {
        return (
            <div className="card shadow">

                <Header title={this.props.title} />

                <section className="card-body">
                    {this.state.todos.map(({ title, completed }, index) =>
                        <Todo onStatusChange={this.handleStatusChange} title={title} completed={completed} key={index} />
                    )}
                </section>

                <footer className="card-body bg-dark">

                    <form className="row">
                        <div className="col">
                            <input className="form-control h-100" type="text" placeholder="Заголовок задачи" />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-light" type="submit">
                                Добавить
                            </button>
                        </div>
                    </form>

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
