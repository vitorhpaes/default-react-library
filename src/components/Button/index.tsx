import React from 'react';

interface ButtonProps {
  version: string
}

const Button: React.FC<ButtonProps> = ({ version }) => {
  return <div>Hello World, {version}</div>;
}

export default Button;
