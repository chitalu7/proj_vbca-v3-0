// firebaseUtilityFunctions.js
import { storage, database } from '../../firebase-config';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as databaseRef, set } from 'firebase/database';

