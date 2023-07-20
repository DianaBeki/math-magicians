import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../components/calculator';

test('test calculator components work correctly', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
});
