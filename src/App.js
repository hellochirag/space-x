import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Countdown = lazy(() => import('./pages/Countdown'));
const NextLaunch = lazy(() => import('./pages/NextLaunch'));

function App() {
  return (
    <Router>
    <Suspense fallback={<h2>loading....</h2>}>
      <Routes>
      <Route path="/" element={<Countdown/>} />
      <Route path="/NextLaunch" element={<NextLaunch/>} />
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;
