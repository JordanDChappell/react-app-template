import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from './App';

describe('App', () => {
  it('Matches snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Renders', () => {
    render(<App />);
    expect(screen.getByText('React App Template')).toBeInTheDocument();
  });
});
