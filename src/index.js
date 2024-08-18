import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import FAQ from './FAQPage'; // Assuming FAQ.js is in the same directory level
import reportWebVitals from './reportWebVitals';
import BonusPage from "./BonusPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/BonusPage" element={<BonusPage />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
