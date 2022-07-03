/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
import { initializeApp } from 'firebase/app'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'
import { getDatabase } from 'firebase/database'

// инициализация базы данных firebase
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
// eslint-disable-next-line no-unused-vars
const database = getDatabase(app)
const storage = getStorage(app)

// Функция загрузки картинки в firebase storage
export const uploadCarPic = (file) => {
    // Create the file metadata
    /** @type {any} */
    const metadata = {
        contentType: 'image/jpeg',
    }

    // Upload file and metadata to the 'images/'
    const storageRef = ref(storage, `images/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file, metadata)

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
        'state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(`Upload is ${progress}% done`)
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused')
                    break
                case 'running':
                    console.log('Upload is running')
                    break
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break
                case 'storage/canceled':
                    // User canceled the upload
                    break

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL)
            })
        }
    )
}
