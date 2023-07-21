import { render } from '@testing-library/react';
import Home from '../pages/Home';
describe('Home component', () => {
  it('must render Home component', () => {
    const { getByTestId } = render(<Home />);
    const input = getByTestId('text');
    expect(input).toBeTruthy();
  });
  it('must render Home p element', () => {
    const { getByTestId } = render(<Home />);
    const paragraph = getByTestId('words');
    expect(paragraph).toBeTruthy();
  });
});