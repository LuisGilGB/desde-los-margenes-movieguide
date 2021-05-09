import { render } from '@testing-library/react';
import Input from './Input';

test('Renders without crashing', () => {
  render(<Input />);
});

test('Default input type is text', () => {
  render(<Input name="testname" dataTestId="input" />);
});
