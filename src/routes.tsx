import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from '@/pages/Main';
import SignIn from '@/pages/SignIn';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
