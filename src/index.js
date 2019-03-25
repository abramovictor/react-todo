import './libs/fontawesome/css/all.css';
import './libs/bootstrap/css/bootstrap.css';
import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Todo from './components/Todo';
import todos from './data/todos.json';

function App(props) {
    return (
        <div className="card shadow">

            <Header title={props.title} />

            <section className="card-body">
                {props.todos.map(({ title, completed }, index) =>
                    <Todo title={title} completed={completed} key={index} />
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

App.propTypes = {
    title: React.PropTypes.string,
    todos: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            completed: React.PropTypes.bool
        })
    ).isRequired
};

App.defaultProps = {
    title: 'React Todo'
};

ReactDOM.render(<App todos={todos} />, document.querySelector('#app'));