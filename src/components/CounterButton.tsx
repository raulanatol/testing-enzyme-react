import * as React from 'react';

interface CounterButtonProps {
    type?: "decrement" | "increment"
}

export class CounterButton extends React.Component<CounterButtonProps, {}> {

    render() {
        const label = this.props.type === 'decrement' ? '-' : '+';
        return <button>{label}</button>
    }
}
