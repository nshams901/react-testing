import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/Learn Testing/i);
  const image = screen.getByTitle('image')
  expect(text).toBeInTheDocument();
  expect(image).toBeInTheDocument()
});
