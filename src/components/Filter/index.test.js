import React from 'react';
import { render, cleanup } from "@testing-library/react";
import Filter from './index';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

describe('<Filter />', () => {

  afterEach(cleanup);

  it('snapshot: renders default state', () => {

    const store = createStore(() => ({}))
    const { asFragment } = render(<Provider store={store}><Filter /></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
