import React from "react"

export default function ContactForm() {
	return (
		<form
			action='https://getform.io/f/b69e910d-5d6a-466b-8694-922068efff2f'
			method='POST'>
			<label>Name</label>
			<input type='text' name='name' />

			<label>E-mail</label>
			<input type='email' name='email' />

			<label>Message</label>
			<input type='text' name='message' />

			<button type='submit'>Send</button>
		</form>
	)
}
