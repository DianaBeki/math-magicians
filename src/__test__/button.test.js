import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/button';

// This will generate/update snapshots for the Button component
test('Button component works correctly', () => {
  const { asFragment } = render(<Button label="Click Me" onClick={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
