import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from "@testing-library/react";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import DetailContainer from './index';
import beers from './index.fixtures';

describe('<DetailContainer />', () => {

  afterEach(cleanup);

  it('snapshot: renders default state', () => {
    const store = createStore(() => ({ beers: { all: beers, current: beers[3], filter: null }}));
    const { asFragment } = render(<Provider store={store}><Router><DetailContainer /></Router></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
