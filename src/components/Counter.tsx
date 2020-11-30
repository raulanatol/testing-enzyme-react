import * as React from 'react';
import { useState } from 'react';
import { CounterButton } from './CounterButton';

interface CounterProps {
  step?: number;
  maxValue?: number;
  minValue?: number;
}

export const Counter: React.FC<CounterProps> = ({
  step = 1,
  maxValue = 20,
  minValue = -20,
}) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    if (value + step <= maxValue) {
      setValue(value + step);
    }
  };

  const handleDecrement = () => {
    if (value - step >= minValue) {
      setValue(value - step);
    }
  };

  return (
    <div>
      <CounterButton isIncrement={true} onClick={handleIncrement} />
      <p>{value}</p>
      <CounterButton isIncrement={false} onClick={handleDecrement} />
    </div>
  );
};
