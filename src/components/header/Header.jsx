import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

import companyLogo from './../../resources/png/logo.png';

function Header() {
	let curLink = window.navigation.currentEntry.url.split('/').reverse()[0]

	return (
		<div className='application-header'>
			<div className="application-header-container">

				<div className="application-header-text">
					<div className="application-header-logo-container">
						<img className='logo' src={companyLogo} alt="#" />
					</div>
					<h1>ООО «МАГИСТРАЛЬЛОГИСТИК»</h1>
				</div>
				<div className="application-header-links">

					<ul>
						<li >
							<Link to='/' className={`${(curLink === '') ? 'current' : ' '}`}>О компании</Link>
						</li>
						<li>
							<Link to='/struct' className={`${(curLink === 'struct') ? 'current' : ' '}`}>Орг. структура</Link>
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

		</div>
	);
}

export default Header;