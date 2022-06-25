import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
// import {} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-database'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './components/App/App'
import store from './redux/reduxStore'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
)

const firebaseConfig = {
    apiKey: 'AIzaSyBbtI6Rc4XhYRURHzMBNtKvGwLo0h3fBAc',
    authDomain: 'autocalculato.firebaseapp.com',
    projectId: 'autocalculato',
    storageBucket: 'autocalculato.appspot.com',
    messagingSenderId: '60151377078',
    appId: '1:60151377078:web:80755b97c7a663b359ca17',
    databaseURL:
        'https://autocalculato-default-rtdb.europe-west1.firebasedatabase.app/',
}

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

const itsWorkRef = ref(database, 'itsWork/')
onValue(itsWorkRef, (snapshot) => {
    const data = snapshot.val()
    console.log(data)
})

const userIdRef = ref(database, 'userId/')
onValue(userIdRef, (snapshot) => {
    const data = snapshot.val()
    console.log(data)
})
