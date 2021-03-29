import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Projects/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
