import React, { Component } from 'react';


import Navigation from '../components/componentsMain/menu/Navigation';
import Footer from '../components/componentsMain/container/Footer';
import api from '../services/api';

export default class Formulary extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            value: '',
            tel: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({ value: event.target.value })
    };

    handleChange2(event) {
        this.setState({ tel: event.target.tel })
    };

    handleSubmit(event) {
        alert( 'Enviado :' + this.state.value + this.state.tel);
        event.preventDefault();
    }

    render() {

          return(
<body>
   <Navigation/>
  <div className='formGeneral'>
    <form id="form" onSubmit={this.handleSubmit}>    

    <div className='form' onSubmit={this.handleSubmit}>
    <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Nome</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" 
               type="text" value={this.state.value} 
               onChange={ this.handleChange } 
               placeholder="Nome completo"></input>

        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input is-success" type="email" placeholder="Email" value=''/>
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label"></div>
  <div class="field-body">
    <div class="field is-expanded">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">
            +55
          </a>
        </p>
        <p class="control is-expanded">
          <input class="input" 
                 type="tel" 
                 tel={ this.state.tel }
                 onChange={ this.handleChange2 } 
                 placeholder="numero de contato"/>
        </p>
      </div>
      <p class="help">WhatsApp</p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Serviço</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <div class="select is-fullwidth">
          <select>
            <option>Hospedagem</option>
            <option>Passeio de Escuna</option>
            <option>Passeio de Lancha</option>
            <option>Passeio de Jeep</option>
            <option>Mergulho</option>
            <option>Guia Turistico</option>

          </select>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <label class="label">Ja utilizou nossos serviços ?</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <label class="radio">
          <input type="radio" name="member"/>
          Sim
        </label>
        <label class="radio">
          <input type="radio" name="member"/>
          Não
        </label>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Titulo</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-danger" type="text" placeholder="MINHA DÚVIDA É..."/>
      </div>
      <p class="help is-danger">
        This field is required
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Minha dúvida é:</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="Gostaria de saber preços de ..."></textarea>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary" id="buttonTop" type='submit'>
          Enviar
        </button>
      </div>
    </div>
  </div>

  </div>
</div>
</form>
</div>
<Footer/>
</body>

)}}