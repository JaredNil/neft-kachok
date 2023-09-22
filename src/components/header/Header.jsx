import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

import companyLogo from './../../resources/png/logo.png';

function Header() {
	let curLink = window.navigation.currentEntry.url.split('/').reverse()[0]

	return (
		<div className='w-full flex flex-col align-middle'>
			<div className="w-full">

				<div
					className="
						w-full
						flex justify-center items-center
						max-md:flex-col
						py-5 px-1
						max-md:py-3
					"
				>
					<div className="
						flex w-28 h-16 relative
					">
						<img className='w-full h-full' src={companyLogo} alt="#" />
					</div>
					<h1
						className='px-8 text-2xl shrink
						max-sm:text-sm
						max-md:py-1 max-md:px-0'
					>
						ООО «МАГИСТРАЛЬЛОГИСТИК»
					</h1>
				</div>

				<div className="	application-header-links	">
					<ul >
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