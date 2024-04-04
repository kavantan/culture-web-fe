import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import AboutUsPage from './pages/AboutUsPage';
import CommunityPage from './pages/CommunityPage';
import ContactUsPage from './pages/ContactUsPage';
import CulturesPage from './pages/CulturesPage';
import MainPage from './pages/MainPage/MainPage';
import KathakaliPage from './pages/CulturesKathakaliPage';
import Navbar from './components/Common/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.scrollContainer}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/cultures" element={<CulturesPage />} />
            <Route path="/cultures/kathakali" element={<KathakaliPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
