import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

import App from './components/App';


import { RouterProvider } from 'react-router-dom';
import router from './components/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} >
			<App />
		</RouterProvider>
	</React.StrictMode >
);

