import * as React from 'react';
import { CounterButton } from './CounterButton';

export class Counter extends React.Component<{}, {}> {
    render() {
        return <div>
          <CounterButton/>
          <CounterButton type="decrement"/>
        </div>
    }
}
