import { render } from '@testing-library/react';
import FullHeightWrapperWithCenteredItems from './FullHeightWrapperWithCenteredItems';

test('Renders without crashing', () => {
  render(
    <FullHeightWrapperWithCenteredItems>
      Test render
    </FullHeightWrapperWithCenteredItems>,
  );
});
