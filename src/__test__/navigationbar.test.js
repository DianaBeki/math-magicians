import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavigationBar from '../components/Navigation/navigationbar';

describe('testing navigationbar', () => {
  it('testing snapshots', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>,
    ).toJSON; // Correctly call the render function with parentheses
    expect(tree).toMatchSnapshot();
  });
});
