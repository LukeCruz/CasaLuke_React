import React, { Component } from 'react';
import api from '../services/api';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class Formulary extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({ value: event.target.value })
    };

    handleSubmit(event) {
        alert( 'Enviado :' + this.state.value );
        event.preventDefault();
    }

    render() {

          return(
<form id="form" onSubmit={this.handleSubmit}>

<label> Primeiro Nome :
    <input type="text" value={ this.state.value } onChange={ this.handleChange }></input>
</label>

    <input id="buttonTop" type="submit"></input>  
    </form>

)}}