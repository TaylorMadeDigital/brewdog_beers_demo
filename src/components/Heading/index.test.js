import React from 'react';
import { render, cleanup } from "@testing-library/react";
import Heading from './index';

describe('<Heading />', () => {

  afterEach(cleanup);

  it('snapshot: renders default state', () => {
    const { asFragment } = render(<Heading>A sample heading</Heading>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('snapshot: renders h4 ', () => {
    const { asFragment } = render(<Heading headingLevel="h4">A sample heading</Heading>);
    expect(asFragment()).toMatchSnapshot();
  });
});
