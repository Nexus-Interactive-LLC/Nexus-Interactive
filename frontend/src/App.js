import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import './assets/styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import WhoWeAre from './components/WhoWeAre';
import ScheduleCall from "./components/ScheduleCall";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Portfolio from "./components/Portfolio"; // Import Portfolio component

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        {/* Route for Home Page */}
                        <Route path="/" element={
                            <>
                                <section className="section">
                                    <HomePage />
                                </section>
                                <section className="section">
                                    <WhoWeAre />
                                </section>
                                <section className="section">
                                    <h2>Want to work with us?</h2>
                                    <ScheduleCall />
                                </section>
                            </>
                        } />

                        <Route path="/portfolio" element={<Portfolio />} />

                        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
