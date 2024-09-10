import React from 'react';
import Navbar from './components/Navbar-comopnet/Navbar';
import TitleScreen from './components/home/mainscreen';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <TitleScreen />
    </div>
  );
}

export default App;
