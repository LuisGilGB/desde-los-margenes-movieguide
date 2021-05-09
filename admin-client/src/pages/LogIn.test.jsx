import { render } from '@testing-library/react';
import LogIn from './LogIn';

test('Renders without crashing', () => {
  render(<LogIn>Test render</LogIn>);
});
