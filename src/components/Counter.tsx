import * as React from 'react';

interface CounterProps {
    type?: 'decrement' | 'increment'
}

export class Counter extends React.Component<CounterProps> {
    render() {
        const label = this.props.type === 'decrement' ? '-' : '+';
        return <button>{label}</button>;
    }
}
