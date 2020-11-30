import * as React from 'react';

interface CounterButtonProps {
  isIncrement?: boolean;
  onClick?: () => void;
}

export const CounterButton: React.FC<CounterButtonProps> = ({
  isIncrement = true,
  onClick,
}) => {
  const label = isIncrement === true ? '+' : '-';
  return <button onClick={onClick}>{label}</button>;
};
