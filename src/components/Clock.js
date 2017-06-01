import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {
    zeroPad(n) {
        return (n < 10)? '0'+n:n;
    }
    getMinutes(time) {
        return this.zeroPad(Math.floor(time/60));
    }
    getSeconds(time) {
        return this.zeroPad(time%60);
    }
    render() {
        let time = {
            minutes: this.getMinutes(this.props.time),
            seconds: this.getSeconds(this.props.time)
        }
        return (
            <div>
                <h1>{time.minutes}:{time.seconds}</h1>
            </div>
        )
    }
}

Clock.propTypes = {
    time:PropTypes.number.required
}

export default Clock;