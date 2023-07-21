import renderer from 'react-test-renderer';
import FetchQuotes from '../components/display';

describe('testing fetch quotes', () => {
  test('testing snapshots', () => {
    const tree = renderer
      .create(<FetchQuotes />).toJSON; // Correctly call the render function with parentheses
    expect(tree).toMatchSnapshot();
  });
});
