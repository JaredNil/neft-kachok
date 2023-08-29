import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<div className='application-header'>
			<header className="application-header-text">
				Какая-то там нефтекомпания
			</header>
			<div className="application-header-links">
				<ul>
					<li>
						<Link to='/'>Главная страница</Link>
					</li>
					<li>
						<Link to='/about'>О компании</Link>
					</li>
					<li>
						<Link to='/contacts'>Контакты</Link>
					</li>
					<li>
						<Link to='/documents'>Документы</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;