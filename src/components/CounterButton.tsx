import * as React from 'react';

interface CounterButtonState {
    counter: number;
}

export class CounterButton extends React.Component<{}, CounterButtonState> {
    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return <button onClick={this.handleOnClick}>{this.state.counter}</button>;
    }
}
