import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import router from '@/Router';
import '@/styles/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
   <React.StrictMode>
      <ThemeProvider>
         <RouterProvider router={router} />
      </ThemeProvider>
   </React.StrictMode>,
);
