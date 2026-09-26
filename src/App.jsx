import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import AnnouncementBar from './components/AnnouncementBar.jsx';
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
  const [announcementOffset, setAnnouncementOffset] = useState(0);

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

  const pagePath = staticPage ? staticPage.path : null;
  const previousPagePath = useRef(pagePath);

  useEffect(() => {
    const wasOnPage = previousPagePath.current;
    previousPagePath.current = pagePath;

    if (pagePath) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // Returning home from another page always lands at the top.
    if (wasOnPage) {
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
  }, [pagePath]);

  const handleLogout = (e) => {
    if (e) e.preventDefault();
    window.location.hash = '';
    setIsLoggedIn(false);
  };

  const PageComponent = staticPage ? staticPage.Component : null;
  const showAnnouncement = !isLoggedIn && !PageComponent;

  return (
    <>
      {showAnnouncement && <AnnouncementBar onOffsetChange={setAnnouncementOffset} />}
      {!isLoggedIn && <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} topOffset={announcementOffset} />}
      <main style={{ height: isLoggedIn ? '100vh' : 'auto', overflow: isLoggedIn ? 'hidden' : 'visible' }}>
        {isLoggedIn ? (
          <DashboardSetup fullscreen={true} onLogout={handleLogout} />
        ) : PageComponent ? (
          <PageComponent params={staticPage.params} serviceId={staticPage.serviceId} />
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
