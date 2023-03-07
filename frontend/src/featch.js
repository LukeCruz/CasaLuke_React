// PAGINA DE TESTES DE REQUISICAO 
// VAI SER ALTERADO DEPOIS DO DEPLOY PRA UTILIZAR URL DO SERVIDOR 

import React from 'react';
import api from './services/api';

export default class App extends React.Component {
  
  state = {
    names : '',
  }

  async componentDidMount(){
    const response = await api.get('');
    const resp = response.data.results;
  const one = resp[0]
  const name = one.name;
  this.setState({name : name})

  console.log(name);
  }

    //const response = await api.post('http://localhost/user:?', { 
  
  render(){
    const {name} = this.state;
  return (
  <div>nomes : {name} </div>
  );
};
}
