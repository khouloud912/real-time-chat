import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import Auth0ProviderWithHistory from './auth/Auth0Provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </React.StrictMode>
);
