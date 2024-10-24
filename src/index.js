import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import FAQ from './FAQPage'; // Assuming FAQ.js is in the same directory level
import reportWebVitals from './reportWebVitals';
import BonusPage from "./BonusPage";
import PrivacyPage from "./PrivacyPage";
import AgreementPage from "./AgreementPage";
import Stats from "./components/Stats";
import SwitcherBot from "./components/SwitchBot";
import MyTransfer from "./components/MyTransfer";

const RootApp = () => {

    const [loggedInUser, setLoggedInUser] = useState(null);

    return (

        <Router>
            <Stats loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
            <Routes>
                <Route path="/" element={<App loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/BonusPage" element={<BonusPage loggedInUser={loggedInUser}/>} />
                <Route path="/PrivacyPage" element={<PrivacyPage/>} />
                <Route path="/AgreementPage" element={<AgreementPage/>} />
                <Route path="/SwitcherBot" element={<SwitcherBot />}/>
                <Route path="/Mytransfer" element={<MyTransfer logginInUser={loggedInUser}/>}/>
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RootApp />
    </React.StrictMode>
);

reportWebVitals();
