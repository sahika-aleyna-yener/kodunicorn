import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Global } from '@emotion/react';
import { motion, AnimatePresence } from 'framer-motion';
import { globalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Education } from './pages/Education';
import { WomenInTech } from './pages/WomenInTech';
import { InteractiveEducation } from './pages/InteractiveEducation';
import { Gamification } from './pages/Gamification';
import { ComputerScience } from './pages/ComputerScience';
import { CreativeContent } from './pages/CreativeContent';
import { Community } from './pages/Community';
import { Character } from './pages/Character';
import StemGames from './pages/StemGames';
import { Footer } from './components/Footer';

// Loading animasyonu bileşeni
const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      flexDirection: 'column',
      gap: '20px'
    }}
  >
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 360]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        fontSize: '4rem',
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
      }}
    >
      🦄
    </motion.div>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      style={{
        color: theme.colors.white,
        fontSize: '2rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}
    >
      KodUnicorn
    </motion.h1>
    <motion.div
      style={{
        width: '60px',
        height: '60px',
        border: '4px solid rgba(255,255,255,0.3)',
        borderTop: '4px solid white',
        borderRadius: '50%'
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </motion.div>
);

// Sayfa geçiş animasyonu bileşeni
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simüle edilmiş loading süresi
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Global styles={globalStyles} />
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog/*" element={<Blog />} />
              <Route path="/education/*" element={<Education />} />
              <Route path="/women-in-tech" element={<WomenInTech />} />
              <Route path="/interactive-education" element={<InteractiveEducation />} />
              <Route path="/gamification" element={<Gamification />} />
              <Route path="/computer-science" element={<ComputerScience />} />
              <Route path="/creative-content" element={<CreativeContent />} />
              <Route path="/community" element={<Community />} />
              <Route path="/character" element={<Character />} />
              <Route path="/stem-games" element={<StemGames />} />
            </Routes>
          </PageTransition>
          <Footer />
        </motion.div>
      )}
    </Router>
  );
}

export default App;