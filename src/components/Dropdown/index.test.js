import React from 'react';
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import Dropdown from './index';
import { FILTER_OPTIONS } from '../../consts/filterOptions';

describe('<Dropdown />', () => {

  afterEach(cleanup);

  it('snapshot: renders default state', () => {
    const { asFragment } = render(<Dropdown value={FILTER_OPTIONS[0].label} onChange={() => {}} options={FILTER_OPTIONS} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should select the right option', () => {
    const mockMyEventHandler = jest.fn()
    render(<Dropdown value={FILTER_OPTIONS[1].label} onChange={mockMyEventHandler}  options={FILTER_OPTIONS} />);
    fireEvent.change(screen.getByTestId("dropdown"), {
      target: { value: "name" },
    })
    expect(mockMyEventHandler).toHaveBeenCalledWith('name')
  })
});
