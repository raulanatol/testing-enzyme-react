import * as React from 'react';

interface buttonProps {
  text: string;
  onClick: any;
}

export const Button: React.FC<buttonProps> = ({ text, onClick }) => {

  return (
    <button onClick={onClick}>{text}</button>
  )
}


Button.displayName = 'Button';