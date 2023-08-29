import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'


function Header() {
	let curLink = window.navigation.currentEntry.url.split('/').reverse()[0]

	return (
		<div className='application-header'>
			<div className="application-header-text">
				<header>Какая-то там нефтекомпания</header>
			</div>
			<div className="application-header-links">
				<ul>
					<li >
						<Link to='/' className={`${(curLink === '') ? 'current' : ' '}`}>Главная страница</Link>
					</li>
					<li>
						<Link to='/about' className={`${(curLink === 'about') ? 'current' : ' '}`}>О компании</Link>
					</li>
					<li>
						<Link to='/contacts' className={`${(curLink === 'contacts') ? 'current' : ' '}`}>Контакты</Link>
					</li>
					<li>
						<Link to='/documents' className={`${(curLink === 'documents') ? 'current' : ' '}`}>Документы</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;