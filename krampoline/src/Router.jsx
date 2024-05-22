import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import LoginCallback from './component/Login/LoginCallback';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/oauth2/callback" element={<LoginCallback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
