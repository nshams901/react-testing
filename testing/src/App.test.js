import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  // checking text "Learn Testing" is present on screen.
  const text = screen.getByText(/Learn Testing/i);
  const image = screen.getByTitle('image');

  // expect fn is the part of the Jest.
  expect(text).toBeInTheDocument();
  expect(image).toBeInTheDocument()
});
