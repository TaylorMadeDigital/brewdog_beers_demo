import React from 'react';
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { CardComponent } from './index';
import cards from './index.fixtures';

describe('<CardComponent />', () => {

  afterEach(cleanup);

  it('snapshot: renders default state', () => {
    const { asFragment } = render(<Router><CardComponent item={cards[0]} /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('snapshot: renders without link', () => {
    const { asFragment } = render(<Router><CardComponent item={cards[1]} /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('snapshot: renders with image', () => {
    const { asFragment } = render(<Router><CardComponent item={cards[2]} /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});
