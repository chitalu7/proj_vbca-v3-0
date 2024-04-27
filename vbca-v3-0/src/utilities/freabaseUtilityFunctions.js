import { storage } from '../../firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { database } from '../../firebase-config';
import { ref, set } from 'firebase/database';



// Function to handle saving the profile
export async function onSave(name, bio, imageFile) {
  const storageRef = ref(storage, `images/${imageFile.name}`);
  try {
    const snapshot = await uploadBytes(storageRef, imageFile);
    const imageUrl = await getDownloadURL(snapshot.ref);
    await saveToDatabase(name, bio, imageUrl);
    console.log('Profile saved:', { name, bio, imageUrl });
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error; // Re-throw to handle it in the component
  }
}


  

// Function to save profile data to Firebase Realtime Database
function saveToDatabase(name, bio, imageUrl) {
    // Create a unique key for each new profile
    const newProfileRef = ref(database, 'profiles/' + Date.now());
    
    // Set the profile data at the new reference
    set(newProfileRef, {
      name: name,
      bio: bio,
      imageUrl: imageUrl
    })
    .then(() => {
      console.log('Data saved successfully!');
      alert('Profile saved successfully!');
    })
    .catch((error) => {
      console.error('Failed to save data:', error);
      alert('Failed to save profile.');
    });
  }
