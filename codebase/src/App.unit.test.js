import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import App from './App';

test('Component matches snapshot', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Component renders as expected', () => {
  const component = shallow(<App />);
  expect(component.text()).toContain('React App Template');
});
