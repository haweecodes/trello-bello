import { render, screen } from '@testing-library/react';
import TaskCard from './index';

describe('task card', () => {
  it('should render task card', () => {
    const { container } = render(<TaskCard/>);
    console.log(container);
    
    expect(container.firstChild).toMatchSnapshot()
  })
})