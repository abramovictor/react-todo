import React, { Component } from 'react';
import Button from './Button';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <form className="row">
                <div className="col">
                    <input className="form-control h-100" type="text" placeholder="Заголовок задачи" />
                </div>
                <div className="col-auto">
                    <Button className="btn btn-light" type="submit" title="Добавить задачу">Добавить</Button>
                </div>
            </form>
        );
    }
}

Form.propTypes = {
    
};