import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

// Define an interface for the props
interface Auth0ProviderProps {
  children: React.ReactNode;
}

const Auth0ProviderWithHistory = ({ children }: Auth0ProviderProps) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN!;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID!;
  const customRedirectUri = 'http://localhost:5173/login';

  console.log('Auth0Provider Config:', { domain, clientId, customRedirectUri });

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: customRedirectUri }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
