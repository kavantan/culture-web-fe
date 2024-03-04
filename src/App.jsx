import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import CommunityPage from './pages/CommunityPage';
import ContactUsPage from './pages/ContactUsPage';
import CulturesPage from './pages/CulturesPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/cultures" element={<CulturesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
