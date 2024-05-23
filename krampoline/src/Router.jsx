import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
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
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
