import React, { Component } from 'react';
import Button from './Button';
import { clearInterval } from 'timers';

export default class Stopwatch extends Component {
    interval = null;

    constructor(props) {
        super(props);

        this.state = {
            running: false,
            elapsed: 0,
            lastTick: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        if (this.state.running) {
            let now = Date.now();
            let diff = now - this.state.lastTick;

            this.setState({
                elapsed: this.state.elapsed + diff,
                lastTick: now
            });
        }
    }

    handleStart = () => {
        this.setState({
            running: true,
            lastTick: Date.now()
        });
    };

    handlePause = () => {
        this.setState({ running: false });
    };

    handleStop = () => {
        this.setState({
            running: false,
            elapsed: 0,
            lastTick: 0,
        });
    };

    format(milliseconds) {
        let totalSeconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
    }

    render() {
        let time = this.format(this.state.elapsed);

        return (
            <div className="stopwatch col text-center">
                <div className="stopwatch-time">
                    {time}
                </div>

                <div className="btn-group">
                    {this.state.running ?
                        <Button title="Пауза" className="btn btn-dark btn-sm" icon="fas fa-pause" onClick={this.handlePause} /> :
                        <Button title="Старт" className="btn btn-dark btn-sm" icon="fas fa-play" onClick={this.handleStart} />
                    }
                    <Button title="Стоп" className="btn btn-dark btn-sm" icon="fas fa-stop" onClick={this.handleStop} />
                </div>
            </div>
        );
    }
}
