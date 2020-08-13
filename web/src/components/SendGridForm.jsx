import React from 'react'

export default function SendGridForm() {
  return (
    <form method='post' action='mailto:lanelps@gmail.com'>
      <label htmlFor='name'>Name:</label>
      <input type='text' name='name' />

      <label htmlFor='email'>Email:</label>
      <input type='email' name='email' />

      <label htmlFor='message'>Message:</label>
      <input type='text' name='message' />

      <button type='submit'>Submit</button>
    </form>
  )
}
