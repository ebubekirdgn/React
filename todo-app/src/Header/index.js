import React from 'react'
import NewToDoForm from './NewToDoForm';

function Header() {
	return (
		<header className="header">
			<h1>TODOS </h1>
			<NewToDoForm/>
		</header>
	);
}

export default Header