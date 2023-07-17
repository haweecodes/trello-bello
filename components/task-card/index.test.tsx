import { getByPlaceholderText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskCard from './index';

describe('task card', () => {
  it('should render task card', () => {
    const { container } = render(<TaskCard/>);
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have a text area', () => {
    const { getByPlaceholderText } = render(<TaskCard/>);
    const input = getByPlaceholderText('Title...');
    expect(input.tagName).toBe('INPUT')
  })

  it('should have card content', () => {
    const { getByTestId } = render(<TaskCard/>);
    const cardContent = getByTestId('card-content');
    expect(cardContent).toHaveTextContent('Card content')
  })
})