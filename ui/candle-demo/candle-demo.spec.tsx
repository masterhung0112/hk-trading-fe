import React from 'react';
import { render } from '@testing-library/react';
import { BasicCandleDemo } from './candle-demo.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCandleDemo />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
