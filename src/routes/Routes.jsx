import { createBrowserRouter } from 'react-router-dom';
import ProductAdd from '../product/ProductAdd';

export const route = createBrowserRouter([
	{
		path: '/',
		element: <ProductAdd />,
	},
]);
