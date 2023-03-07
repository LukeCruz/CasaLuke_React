import React, { Component } from 'react';
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
        alert( 'Enviado :' + this.state.value  + this.state.tel);
        event.preventDefault();
    }

    render() {

          return(
<form id="form" onSubmit={this.handleSubmit}>

<label> nome :
    <input type="text" value={ this.state.value } onChange={ this.handleChange }></input>
</label>
<label> Telefone :
    <input type="tel" value={ this.state.tel } onChange={ this.handleChange2 }></input>
</label>


    <input id="buttonTop" type="submit"></input>  
    </form>

)}}