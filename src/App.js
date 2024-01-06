import ReactDOM from 'react-dom/client';
import Header from './AppLayout/Components/Header/Header';
import AppLayout, { AppRouter } from './AppLayout/AppLayout';
import { Router,RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {AppRouter}/>)