import { render, screen } from '@testing-library/react';
import App from './App';
import vector.png from './Image folder';

test('renders learn react link', () => {
  render(<App />
  <Vector.png/>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
