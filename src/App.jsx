
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRoutes from './routes/AppRoutes';
import { Toaster } from '@/components/ui/toaster';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-900 text-white font-inter">
          <AppRoutes />
          <Toaster />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
