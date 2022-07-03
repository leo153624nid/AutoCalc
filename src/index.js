import React from 'react'
import ReactDOM from 'react-dom/client'
// import { initializeApp } from 'firebase/app'
// import { getStorage, ref } from 'firebase/storage'
// import { getDatabase } from 'firebase/database'
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

// // инициализация базы данных firebase
// const firebaseConfig = {
//     apiKey: 'AIzaSyBbtI6Rc4XhYRURHzMBNtKvGwLo0h3fBAc',
//     authDomain: 'autocalculato.firebaseapp.com',
//     projectId: 'autocalculato',
//     storageBucket: 'autocalculato.appspot.com',
//     messagingSenderId: '60151377078',
//     appId: '1:60151377078:web:80755b97c7a663b359ca17',
//     databaseURL:
//         'https://autocalculato-default-rtdb.europe-west1.firebasedatabase.app/',
// }
// const app = initializeApp(firebaseConfig)
// const database = getDatabase(app)
// const storage = getStorage(app)
// const storageRef = ref(storage)

// console.dir(app)
// console.dir(database)
// console.dir(storageRef)

// // const userIdRef = ref(database, 'userId/')
// // onValue(userIdRef, (snapshot) => {
// //     const data = snapshot.val()
// //     console.log(data)
// // })

// // eslint-disable-next-line import/prefer-default-export
// export const uploadFile = (iconFile, callback) => {
//     const fileName = iconFile.name

//     const uploadTask = storageRef.child(`/pic/${fileName}`).put(iconFile)

//     uploadTask.on(
//         'state_changed',
//         (snapshot) => {
//             const progress =
//                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//             callback({ progress })
//         },
//         (error) => {
//             callback({ error })
//         },
//         () => {
//             const { downloadURL } = uploadTask.snapshot
//             callback({ downloadURL })
//         }
//     )
// }
