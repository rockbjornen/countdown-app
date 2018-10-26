import React, { Component } from 'react';
import moment from 'moment';

class ProgressBarExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            percentage: 0
        }
    }

    componentDidMount() {

        const end = moment("2018-12-22");
        const start = moment("2018-10-19");
        const today = moment();

        const timeBetweenStartAndEnd = (end - start);
        const timeBetweenStartAndToday = (today - start);
        const p = Math.round(timeBetweenStartAndToday / timeBetweenStartAndEnd * 100);

        this.setState({
            ...this.state, percentage: p
        })
    }

    render() {
        return (
            <ProgressBar percentage={this.state.percentage} />
        )
    }
}

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Filler percentage={props.percentage} />
            <div className="bear"><span role="img" aria-label="bear">🐻</span></div>
        </div>
    )
}

const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
}

export default ProgressBarExample;