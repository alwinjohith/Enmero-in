import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TextHighlight from './components/TextHighlight.jsx';
import StatsTestimonial from './components/StatsTestimonial.jsx';
import AgentJourney from './components/AgentJourney.jsx';
import DashboardSetup from './components/DashboardSetup.jsx';
import ValueProps from './components/ValueProps.jsx';
import TestimonialsFAQ from './components/TestimonialsFAQ.jsx';
import Footer from './components/Footer.jsx';
import { getStaticPage } from './routes.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(window.location.hash === '#login');
  const [staticPage, setStaticPage] = useState(() => getStaticPage(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setIsLoggedIn(window.location.hash === '#login');
      setStaticPage(getStaticPage(window.location.hash));
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (staticPage) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    const hash = window.location.hash;
    if (!hash || hash === '#login' || hash === '#top') return;
    const target = document.getElementById(hash.slice(1));
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [staticPage]);

  const handleLogout = (e) => {
    if (e) e.preventDefault();
    window.location.hash = '';
    setIsLoggedIn(false);
  };

  const PageComponent = staticPage ? staticPage.Component : null;

  return (
    <>
      {!isLoggedIn && <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      <main style={{ height: isLoggedIn ? '100vh' : 'auto', overflow: isLoggedIn ? 'hidden' : 'visible' }}>
        {isLoggedIn ? (
          <DashboardSetup fullscreen={true} onLogout={handleLogout} />
        ) : PageComponent ? (
          <PageComponent />
        ) : (
          <>
            <Hero />
            <TextHighlight />
            <StatsTestimonial />
            <AgentJourney />
            <ValueProps />
            <TestimonialsFAQ />
          </>
        )}
      </main>
      {!isLoggedIn && <Footer />}
    </>
  );
}

export default App;

