import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes/index.tsx';
import Auth0ProviderNavigate from './Auth0/Auth0Provider.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
      },
   },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <Router>
         <QueryClientProvider client={queryClient}>
            <Auth0ProviderNavigate>
               <MainRoutes />
            </Auth0ProviderNavigate>
         </QueryClientProvider>
      </Router>
   </React.StrictMode>
);
