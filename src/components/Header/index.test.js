import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from "@testing-library/react";
import Header from './index';

describe('<Header />', () => {

  afterEach(cleanup);

  it('snapshot: renders default state', () => {
    const { asFragment } = render(<Router><Header /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});
