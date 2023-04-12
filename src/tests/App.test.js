import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';

import App from '../App';
import About from '../pages/About';
import ButtonOpenMenu from '../components/componentsMain/buttons/ButtonOpenMenu';

describe('testes de data-test-id', () => {
  it('Testando se o home aparece', () => {
    render(<App />);
    const element = screen.getByTestId('home-test');
      expect(element).toBeInTheDocument();
  
   }),
  it('Testando se o card aparece', () => {
    render(<App />);
    const element = screen.getByTestId('card-test');
      expect(element).toBeInTheDocument();
  
   }),
  it('Testando se o containers aparece', () => {
    render(<App />);
    const element = screen.getByTestId('containers-test');
      expect(element).toBeInTheDocument();
  
   }),
  it('Testando se o about aparece', () => {
    render(<App />);
    const element = screen.getByTestId('about-test');
      expect(element).toBeInTheDocument();
  
   })
})




//TESTES DE BOTÕES

describe('Testa todos os botões da pagina', ()=> {
  it('testa o botão de abrir e fechar o menu mobile', ()=> {
    render(<ButtonOpenMenu />)
      const btnOpen = screen.getByTestId('btnOpen-test')
      fireEvent.click(btnOpen)

      expect()
  })
})