import { render, screen } from '@testing-library/react';
import WorkSpaceLayout from './index';

describe('workspace layout', () => {
  it('should render navigation section', () => {
    const { container } = render(<WorkSpaceLayout><p>Show me</p></WorkSpaceLayout>);
    expect(container.firstChild).toMatchSnapshot()
  })
})