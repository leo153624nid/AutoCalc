import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App/App'
import store from './redux/reduxStore'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Router>
            <App
                state={store.getState()}
                // eslint-disable-next-line react/jsx-no-bind
                changeCarusel={store.changeCarusel.bind(store)}
            />
        </Router>
    </React.StrictMode>
)
