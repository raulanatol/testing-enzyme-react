import * as React from 'react';

interface CounterButtonState {
    counter: number;
}

interface CounterButtonProps {
    onLimit: () => void;
}

export class CounterButton extends React.Component<CounterButtonProps, CounterButtonState> {
    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        const newValue = this.state.counter + 1;
        this.setState({ counter: newValue });
        if (newValue > 5) {
            this.props.onLimit();
        }
    }

    render() {
        return <button onClick={this.handleOnClick}>{this.state.counter}</button>;
    }
}
