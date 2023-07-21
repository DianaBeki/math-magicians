import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import  NavigationBar from '../components/Navigation/navigationbar';
import renderer from 'react-test-renderer';

describe('testing navigationbar', () => {
    it('testing snapshots', () => {
      const tree = renderer.create(
      <BrowserRouter>
      < NavigationBar />
      </BrowserRouter>).toJSON; // Correctly call the render function with parentheses
      expect(tree).toMatchSnapshot();
    });
  });