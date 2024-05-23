import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginCallback from './component/Login/LoginCallback';
import LoginPage from './pages/LoginPage';
import OnboardingPage from './pages/OnboardingPage';
import SelectPage from './pages/SelectPage';

const Router = () => {
  const [homeComponent, setHomeComponent] = useState(<OnboardingPage />);

  useEffect(() => {
    setTimeout(() => {
      setHomeComponent(<SelectPage />);
    }, 1500);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={homeComponent} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/oauth2/callback" element={<LoginCallback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
