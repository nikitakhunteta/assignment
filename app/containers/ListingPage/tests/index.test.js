import React from 'react';
import { shallow } from 'enzyme';

import ListingPage from '../index';

describe('<ListingPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<ListingPage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

});
