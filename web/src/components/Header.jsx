import React from "react"

export default function Header({ title, text }) {
	return (
		<header className='header-title'>
			<h1 className='title'>{title}</h1>
			<h2 className='text'>{text}</h2>
		</header>
	)
}
