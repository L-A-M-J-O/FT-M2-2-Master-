import React from 'react'
import { useState } from 'react';
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {

  const [state, setState ] = useState( 
    {
      name: '',
      email: '',
      phone: '',
      problem: '',
      mensaje: ''
    }
  )
  const handleChange = (state, e) => {
    
  }
  return <div>
    <form>
      <label>Name</label>
      <br/>
      <input name='name'value={state.name} type='text' placeholder=' Escribe tu Name'/>
      <br/>
      <label>Email</label>
      <br/>
      <input name='email'value={state.email}type='text' placeholder=' Escribe tu Email'/>
      <br/>
      <label>Phone</label>
      <br/>
      <input name='phone'value={state.phone}type='number' placeholder=' Escribe tu Phone'/>
      <br/>
      <label>Problem</label>
      <br/>
      <input name='problem'value={state.problem}type='text' placeholder=' Escribe tu Problem'/>
      <br/>
      <label>Mensaje</label>
      <br/>
      <input name='mensaje'value={state.mensaje}type='text' placeholder=' Escribe tu Mensaje...'/>
      <hr/>
      <input name='name'type='submit'/>
    </form>
  </div>
}
