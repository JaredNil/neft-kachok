import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import About from './about/About';
import Contacts from './contacts/Contacts';
import Documents from './documents/Documents';


const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/"
				index
				element={<App />}
				errorElement={<App />}
			/>
			<Route
				path="/about"
				element={<About />}
				errorElement={<App />}
			/>
			<Route
				path="/contacts"
				element={<Contacts />}
				errorElement={<App />}
			/>
			<Route
				path="/documents"
				element={<Documents />}
				errorElement={<App />}
			/>
		</>
	)
)

export default router;