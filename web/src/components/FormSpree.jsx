import React from "react"

export default class FormSpree extends React.Component {
	state = {
		status: ""
	}

	render() {
		const { status } = this.state
		return (
			<form
				onSubmit={this.submitForm}
				action='https://formspree.io/mzbjrwjv'
				method='POST'>
				<label for='name'>Name:</label>
				<input type='text' name='name' />
				<label for='email'>Email:</label>
				<input type='email' name='email' />
				<label for='message'>Message:</label>
				<input type='text' name='message' />
				{status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
				{status === "ERROR" && <p>Ooops! There was an error.</p>}
			</form>
		)
	}

	submitForm = (e) => {
		e.preventDefault()
		const form = e.target
		const data = new FormData(form)
		const xhr = new XMLHttpRequest()
		xhr.open(form.method, form.action)
		xhr.setRequestHeader("Accept", "application/json")
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return
			if (xhr.status === 200) {
				form.reset()
				this.setState({ status: "SUCCESS" })
			} else {
				this.setState({ status: "ERROR" })
			}
		}
		console.log(form)
		// xhr.send(data)
	}
}
