import React from "react"

export default function ContactForm() {
	return (
		<form method='post' action='mailto:lanelps@gmail.com' enctype='text/plain'>
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
