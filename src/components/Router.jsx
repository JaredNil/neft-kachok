import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import Struct from './struct/Struct';
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
				path="/struct"
				element={<Struct />}
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

			/>
		</>
	)
)

export default router;