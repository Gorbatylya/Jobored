import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { MantineProvider, Text } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <MantineProvider theme={{
      fontFamily: 'Inter'
    }}>
    <App />
    </MantineProvider>
  </React.StrictMode>
  </BrowserRouter>
);

