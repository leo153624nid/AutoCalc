/* eslint-disable react/jsx-no-bind */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './components/App/App'
import store from './redux/reduxStore'

const root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderAll = (state) => {
    root.render(
        <React.StrictMode>
            <Router>
                <Provider store={store}>
                    <App
                        state={state}
                        dispatch={store.dispatch.bind(store)}
                        store={store}
                    />
                </Provider>
            </Router>
        </React.StrictMode>
    )
}

rerenderAll(store.getState())

store.subscribe(() => {
    rerenderAll(store.getState())
})
