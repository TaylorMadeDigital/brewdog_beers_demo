import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, screen } from "@testing-library/react";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import ListingContainer from './index';
import beers from './index.fixtures';

describe('<ListingContainer />', () => {

  afterEach(cleanup);

  it('snapshot: renders default state', () => {
    const store = createStore(() => ({ beers: { all: beers, current: beers[0], filter: null }}));
    const { asFragment } = render(<Provider store={store}><Router><ListingContainer /></Router></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('snapshot: renders ordered by abv', async () => {
    const store = createStore(() => ({ beers: { all: beers, current: beers[0], filter: 'abv' }}));
    const { asFragment } = render(<Provider store={store}><Router><ListingContainer /></Router></Provider>);
    expect(asFragment()).toMatchSnapshot();
    const cards = await screen.findAllByTestId('cardHeading')
    expect(cards[0]).toHaveTextContent('Trashy Blonde');
  });
  
});

