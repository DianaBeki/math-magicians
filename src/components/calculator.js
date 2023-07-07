import React from 'react';
import Button from './button';

const Calculator = () => (
  <div className="calculator">
    <div className="display">0</div>
    <div className="button-container">
      <Button label="AC" />
      <Button label="+/-" />
      <Button label="%" />
      <button type="button" className="orange">÷</button>
      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <button type="button" className="orange">x</button>
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <button type="button" className="orange">-</button>
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <button type="button" className="orange">+</button>
    </div>
    <div className="btn-row">
      <div colSpan="2" className="button0">
        <Button label="0" />
      </div>
      <Button label="." />
      <button type="button" className="orange bg">=</button>
    </div>
  </div>
);

export default Calculator;
