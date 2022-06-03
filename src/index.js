import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';

import userData from './database/CurrentUser.json';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <Router>
        <App userData={userData}/>
      </Router>
    </React.StrictMode>
);


