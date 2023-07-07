import React from 'react';
import Calculator from './components/calculator';
import FetchQuotes from './components/display';

const App = () => (
  <div className="section">
    <Calculator />
    <FetchQuotes />
  </div>
);
export default App;
