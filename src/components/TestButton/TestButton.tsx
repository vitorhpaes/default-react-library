import React from 'react';

export interface TestButtonProps {
  version: string
}

import './TestButton.scss'

const TestButton: React.FC<TestButtonProps> = ({ version }) => {
  return <button className="test-button">Hello World, {version}</button>;
}

export default TestButton;
