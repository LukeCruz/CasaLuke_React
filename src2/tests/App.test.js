import { render, screen } from '@testing-library/react';
import App from '../App';

test('renderizada itens na tela', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sobre Nós/);
  expect(linkElement).toBeInTheDocument();
});
