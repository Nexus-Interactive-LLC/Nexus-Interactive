import React, { useState } from 'react';
import './assets/styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Partners from './components/Partners';
import Services from './components/Services';
import ScheduleCall from "./components/ScheduleCall";
import WhoWeAre from "./components/WhoWeAre";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    // Function to render the appropriate page/component
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <>
                        <section className="section">
                            <HomePage />
                        </section>
                        <section className="section">
                            <WhoWeAre />
                        </section>
                        <section className="section">
                            <Services />
                        </section>
                        <section className="section">
                            <Partners />
                        </section>
                        <section className="section">
                            <h2>Want to work with us?</h2>
                            <ScheduleCall />
                        </section>
                    </>
                );
            case 'privacy':
                return <PrivacyPolicy />;
            default:
                return <div>Page not found</div>;
        }
    };

    return (
        <div className="App">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main>
                {renderPage()}
            </main>
            <Footer setCurrentPage={setCurrentPage} />
        </div>
    );
}

export default App;