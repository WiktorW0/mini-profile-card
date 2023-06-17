import React from 'react'
import './App.css';
import Info from './components/info.jsx'
import About from './components/about';
import Interests from './components/interests';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <main className='cointainer'>
        <Info />
        <About />
        <Interests />
        <Footer />
      </main>
    </div>
  );
}

export default App;
