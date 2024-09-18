import { AppState, Auth0Provider, User } from '@auth0/auth0-react';
import React from 'react';

type Props = {
   children: React.ReactNode;
};

export default function Auth0ProviderNavigate({ children }: Props) {
   const domain = import.meta.env.VITE_AUTH0_DOMAIN;
   const clientId = import.meta.env.VITE_AUTH0_CLIENTID;
   const callbackURL = import.meta.env.VITE_AUTH0_CALLBACKURL;
   // const serverURL = import.meta.env.VITE_AUTH0_SERVERURL;

   if (!domain || !clientId || !callbackURL) {
      throw new Error('unable to initialize auth');
   }

   const onRedirectCallback = (AppState?: AppState, user?: User) => {
      console.log('USER', user);
   };

   return (
      <Auth0Provider
         domain={domain}
         clientId={clientId}
         authorizationParams={{
            redirect_uri: callbackURL,
         }}
         onRedirectCallback={onRedirectCallback}
         useRefreshTokens
         cacheLocation="localstorage"
      >
         {children}
      </Auth0Provider>
   );
}
