// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

export { app, storage, database };