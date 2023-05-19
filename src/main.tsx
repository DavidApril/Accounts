import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from './components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<GoogleOAuthProvider clientId=''>
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<App />
			</Suspense>
		</BrowserRouter>
	</GoogleOAuthProvider>
);
