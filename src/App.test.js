import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  // Log the document body to inspect the rendered content
  console.log(document.body.innerHTML);
  
  // Attempt to find the element with different text content or matcher
  const linkElement = screen.getByText(/Hello World/i); // Update matcher to match existing text
  expect(linkElement).toBeInTheDocument();
});
