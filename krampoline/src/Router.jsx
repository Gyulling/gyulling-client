import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
