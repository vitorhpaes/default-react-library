import React from 'react';
import ReactDOM from 'react-dom';

import TestComponent from '../src/components/Button';

const App = () => (
  <>
    <TestComponent />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
