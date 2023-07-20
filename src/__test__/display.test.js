import { render } from '@testing-library/react';
import FetchQuotes from '../components/display';

  <render />;
describe('testing fetch quotes', () => {
  test('testing snapshots', () => {
    const tree = render.create(<FetchQuotes />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
