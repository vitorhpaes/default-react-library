import React from 'react';

interface TestButtonProps {
  version: string
}

import './styles.scss'

const TestButton: React.FC<TestButtonProps> = ({ version }) => {
  return <button className="test-button">Hello World, {version}</button>;
}

export default TestButton;
