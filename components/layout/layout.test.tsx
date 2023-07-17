import { act, render, screen } from '@testing-library/react';
import WorkSpaceLayout from './index';

describe('workspace layout', () => {
  it('should render navigation section', async () => {
   const {container} = await act( async () => render(<WorkSpaceLayout><p>Show me</p></WorkSpaceLayout>));
    expect(container.firstChild).toMatchSnapshot()
  })
})