import React from 'react';
import './assets/styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Partners from './components/Partners';
import Services from './components/Services';
import ScheduleCall from "./components/ScheduleCall";

function App() {
  return (
      <div className="App">
        <Header />
        <main>
            <HomePage />
            <Partners />
            <Services />
            <h2>Want to work with us?</h2>
            <ScheduleCall/>
        </main>
        <Footer />
      </div>
  );
}

export default App;
