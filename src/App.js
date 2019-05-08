import React from 'react';
import { LayoutProvider } from './LayoutContext'
import Landing from './pages/Landing'
import './App.css';

const App = () => {
  return (
    <LayoutProvider>
      <Landing />
    </LayoutProvider>
  );
}

export default App;
