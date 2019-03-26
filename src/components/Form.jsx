import React, { Component } from 'react';
import Button from './Button';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        let title = this.state.title;

        if (title) {
            this.props.onAdd(title);
            this.setState({ title: '' });
        }
    };

    handleChange = event => {
        let title = event.target.value;
        this.setState({ title });
    };

    render() {
        return (
            <form className="row" onSubmit={this.handleSubmit}>
                <div className="col">
                    <input
                        className="form-control h-100"
                        type="text"
                        placeholder="Заголовок задачи"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="col-auto">
                    <Button className="btn btn-light" type="submit" title="Добавить задачу">
                        Добавить
                    </Button>
                </div>
            </form>
        );
    }
}

Form.propTypes = {
    onAdd: React.PropTypes.func.isRequired,
};