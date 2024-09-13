import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUsPage from 'pages/AboutUsPage';
import CommunityPage from 'pages/CommunityPage';
import ContactUsPage from 'pages/ContactUsPage';
import CulturesPage from 'pages/CulturesPage';
import MainPage from 'pages/MainPage';
import KathakaliPage from 'pages/CulturesKathakaliPage';
import KootiyattamPage from 'pages/CulturesKootiyattamPage';
import Navbar from 'components/Common/Navbar';
import './styles';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <Navbar />
        <div className="px-xlarge overflow-auto">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/cultures" element={<CulturesPage />} />
            <Route path="/cultures/kathakali" element={<KathakaliPage />} />
            <Route path="/cultures/kootiyattam" element={<KootiyattamPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
