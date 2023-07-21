import { render } from '@testing-library/react';
import FetchQuotes from '../components/display';
import  renderer from 'react-test-renderer';

describe('testing fetch quotes', () => {
  test('testing snapshots', () => {
    const tree = renderer.create(<FetchQuotes />).toJSON; // Correctly call the render function with parentheses
    expect(tree).toMatchSnapshot();
  });
});
