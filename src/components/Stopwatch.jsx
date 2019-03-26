import React, { Component } from 'react';
import Button from './Button';

export default class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="stopwatch col text-center">
                <div className="stopwatch-time">
                    00:23
                </div>

                <div className="btn-group">
                    <Button className="btn btn-dark btn-sm" icon="fas fa-play" />
                    <Button className="btn btn-dark btn-sm" icon="fas fa-stop" />
                </div>
            </div>
        );
    }
}
