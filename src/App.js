import React from 'react';
import Header from './components/Header';
import CloudNetworks from './components/CloudNetworks';
import CloudResources from './components/CloudResources';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Header />
      <div className="flex p-4">
        <CloudNetworks />
        <CloudResources />
      </div>
      <Footer />
    </div>
  );
};

export default App;
