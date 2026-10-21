import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Kids from './pages/Kids.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import { ProductProvider } from './context/ProductProvider.jsx'
import SingleProducts from './pages/SingleProducts.jsx'

const router = createBrowserRouter([{
	element: <App />,
	path: "/",
	children: [
		{
			element: <Home/>,
			index: true,
		},
		{
			element: <About/>,
			path: 'about'
		},
		{
			element: <Contact/>,
			path: 'contact'
		},
		{
			element: <Kids/>,
			path: 'kids'
		},
		{
			element: <Men/>,
			path: 'men'
		},
		{
			element: <Women/>,
			path: 'women'
		},
		{
			element: <SingleProducts/>,
			path: "singleProduct/:id"
		},
	]
}])

createRoot(document.getElementById('root')).render(
  <ProductProvider>
		<StrictMode>
    	<RouterProvider router={router}/>
  	</StrictMode>,
	</ProductProvider>,
);
