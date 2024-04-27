import React, { useState } from 'react';
import './ContractProfileForm.css';
import { storage } from '../../firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { database } from '../../firebase-config';
import { set, ref as dbRef } from 'firebase/database';
// import { storage } from './firebase-config'; // Firebase config import
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { database } from './firebase-config'; // Ensure database is also configured
// import { set, ref as dbRef } from 'firebase/database';

function ContractProfileForm({ onSave }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'bio') {
      setBio(value);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image && name && bio) {
      try {
        const storageRef = ref(storage, `images/${image.name}`);
        const snapshot = await uploadBytes(storageRef, image);
        const imageUrl = await getDownloadURL(snapshot.ref);
        saveToDatabase(name, bio, imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to upload image.');
      }
    } else {
      alert('Please fill all fields and select an image.');
    }
  };

  const saveToDatabase = (name, bio, imageUrl) => {
    const newProfileRef = dbRef(database, 'profiles/' + Date.now());
    set(newProfileRef, {
      name: name,
      bio: bio,
      imageUrl: imageUrl
    })
    .then(() => console.log('Data saved successfully!'))
    .catch((error) => {
      console.error('Failed to save data:', error);
      alert('Failed to save profile.');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <fieldset>
        <legend>Profile Information</legend>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={bio}
            onChange={handleInputChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            required />
        </div>
        <button type="submit" className="save-btn">Save Profile</button>
      </fieldset>
    </form>
  );
}

export default ContractProfileForm;
