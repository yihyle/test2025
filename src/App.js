import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SOSPage from './pages/SOSPage';

const App = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('/api/data')
            .then((response) => response.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='/sos' element={<SOSPage/>} />
            </Routes>
        </Router>
    );
};

export default App;
